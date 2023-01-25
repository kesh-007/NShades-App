import Header from './Header.js';
import Post from './Post.js';
import Rating from './Rating.js';
import Image from './1.jpg';
import Image2 from './2.jpg';
import Image3 from './3.jpg';
import Image4 from './4.jpg';
import Image5 from './5.png';
import Image6 from './6.jpg';
import Image7 from './7.png';
import Image8 from './8.jpg';
import Image9 from './9.jpg';

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

export default function TrendingPage(){
    return (
        <div className="Trending-page-layout">
            <Header title="Trending Now"
            icon = {false}/>
            <div className="scroll-view">
                <div />
                {items.map((item,index)=>( 
                    <>
                        <Rating rank = {"21 C"} top = {1}/>
                        <Post key = {index} 
                        accountName = "Harish"
                        accountInfo = "Additional info"
                        date = {"6 days ago"}
                        nftName = {"My rear collection"} 
                        image = {item}
                        avatar = {Image}/>
                    </>
                ))}
              </div>
        </div>
    );
}