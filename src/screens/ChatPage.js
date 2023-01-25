import React, { useRef, useState } from 'react'
import LoginPage from '../LoginPage'
import firebase from 'firebase/compat/app';
import {auth,db,provider} from '../Firebase/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { Image, View } from 'react-native';
import {Text} from 'react-native'

import 'firebase/compat/firestore';
import {FieldValue} from "firebase/firestore";
import '../ChatPage.css'

function ChatPage() {
  const [user] = useAuthState(auth)
  console.log(user)
  
  return (
    <View>
      
      {user ?<ChatRoom />:<LoginPage/>}
    </View>

  )
}

function Signout()
{
  return auth.currentUser &&
  (
    <button onClick={()=>auth.signOut()}>Signout</button>
  )
}

function ChatRoom()
{
  const dummy = useRef()
  const messageRef = db.collection('messages')
  const query = messageRef.orderBy('createdAt').limit(20);
  const [messages] = useCollectionData(query,{idField:'id'})
  const [formvalue,setformvalue] = useState('')
  const sendMessage = async(e)=>
  {
    e.preventDefault()
    const {uid,photoURL} = auth.currentUser;
    await messageRef.add({
      text:formvalue,
      createdAt:new Date(),
      uid,
      photoURL,
    })
    
    setformvalue('')
    dummy.current.scrollIntoView({behaviour:'smooth'})
  }
  return(
    <div>
      <View style={{backgroundColor:'gray',height:50,marginBottom:10}}>
        <Text style={{textAlign:'center',fontSize:20}}>Chat Page</Text>
        </View>

      
        <main>
      {messages && messages.map(msg=><ChatMessage key={msg.id} message={msg}/>)}
      <div ref={dummy}></div>
      
      </main>
      <form onSubmit={sendMessage}> 
        <input value={formvalue} onChange={(e)=>setformvalue(e.target.value)}/>
        <button type='submit'><Image source={'https://cdn-icons-png.flaticon.com/512/3682/3682321.png'} style={{height:30,width:30}}/></button>
      </form>
    </div>
  )
}
function ChatMessage(props)
{
  const {text,uid,photoURL} = props.message;
  const messageClass = uid===auth.currentUser.uid?'sent':'received';


  return(
    <div className={`message ${messageClass}`}>
      <Image source={photoURL} style={{width:40,height:40,borderRadius:40,marginBottom:14,marginLeft:5}}/>
    <p>{text}</p>
    </div>
  )
}
export default ChatPage