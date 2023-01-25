import './TrendingPage.css';
import LikeOff from './like-off.png';
import LikeOn from './like-on.png';


export default function Rating(props){

    return (
        <div className="rating">
                <div>
                    <p>Top {props.top}</p>
                </div>
                <div className='separator'/>
                <div className='image'>
                    <img src={LikeOff}/>
                </div>
                <div>
                    <p>{props.rank}</p>
                </div>
        </div>
    );
}