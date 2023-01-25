import Header from "./Header";
import './ProfilePage.css';
import Upload from './upload.png';
import Magnify from './magnify.png';


function Card(props){
    return (
        <div className="profile-card">
            <div className="profile-details">
                <div className="post-header">
                    <span className="profile-username">
                        {props.username}
                    </span>
                    <p>ABOUT</p>
                    <span>
                        {props.about}
                    </span>
                </div>
            </div>
            <div className="profile-buttons">
                <button>Edit Profile</button>
            </div>
            <div className="profile-num-details">
                <div>
                    <span>{props.nfts}</span>
                    <p>Nfts tokens</p>
                </div>
                <div>
                    <span>{props.followers}</span>
                    <p>Followers</p>
                </div>
                <div>
                    <span>{props.following}</span>
                    <p>Following</p>
                </div>
            </div>
        </div>
    );
}

export default function ProfilePage(props){

    return (
        <div className="profile-layout">
            <Header title = {props.id} 
            icons = {true}
            icon1 = {Magnify}
            icon2 = {Upload}
            />
            <div className="profile-scroll-view">
                <div className="cross-bg"/>
                <div className="profile-card-layout">
                    <Card nfts={props.nfts}
                    avatar = {props.avatar}
                    followers = {props.followers}
                    following = {props.following}
                    about = {props.about}
                    username = {props.username}
                    />
                </div>
            </div>
            <div className="post-title"><p>My Collections</p></div>
            <div className="profile-post-grid-layout">
                <div className="profile-posts">
                    {props.posts.map((item,index)=>(
                            <img src = {item}
                        alt = {"MediaError"} 
                        key = {index}/>
                    ))}
                </div>
            </div>
        </div>
    );

}