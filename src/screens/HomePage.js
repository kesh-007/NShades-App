




import '../App.css';
import Header from '../Header';
import Post from '../Post';
import Magnify from '../magnify.png';
import UpLoad from '../upload.png';
import Image from '../1.jpg';
import Image2 from '../2.jpg';
import Image3 from '../3.jpg';
import Image4 from '../4.jpg';
import Image5 from '../5.png';
import Image6 from '../6.jpg';
import Image7 from '../7.png';
import Image8 from '../8.jpg';
import Image9 from '../9.jpg';
import { ScrollView, View } from 'react-native';


const items = [
  Image,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9
];

function HomePage() {
  return (
    <View>
    <ScrollView>
    <div className="Home-page-layout">
      <Header icons = {true}
      title = "NShades" 
      icon1 = {Magnify}
      icon2 = {UpLoad}/>
      <div className='scroll-view'>
          {items.map(item => (
            
              <Post key = {item} accountName = "Harish"
              date = {"6 days ago"}
              nftName = {"My rear collection"} 
              image = {item}
              accountInfo = {"Additional info"}
              avatar = {Image}/>
          ))}
      </div>
    </div>
    </ScrollView>
    
    </View>
  );
}

export default HomePage;