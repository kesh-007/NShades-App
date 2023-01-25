
import "./App.css";
import LikeOn from './like-on.png';
import LikeOff from './like-off.png';
import CommentOn from './comment-on.png';
import CommentOff from './comment-off.png';
import ShearOn from './shear-on.png';
import ShearOff from './shear-off.png';
import VerticalDots from './vertical-dots.png';

export default function Post(props){

    return (
        <div className="post-layout">
            <div className="post-header">
                <div className="post-avatar">
                    <div>
                        <img src = {props.avatar}/>
                    </div>
                </div>
                <div className="account-name-info">  
                    <p>{props.accountName}</p>
                    <span>{props.accountInfo}</span>
                </div>
                <img className="verticaldots" src={VerticalDots}/>
            </div>
            <div className="post-image">
                <img src = {props.image} alt = {"Post error"}/>
            </div>
            <div className="post-footer">
                <div className="footer-icon-buttons">
                    <div className="like">
                        {<img src={LikeOff}/>}
                    </div>
                    <div className="comment">
                        {<img src={CommentOff}/>}
                    </div>
                    <div className = "claim-button-layout">
                        <button>CLAIM</button>
                    </div>
                    <div/>
                    <div className="shear">
                        {<img src={ShearOff}/>}
                    </div>
                </div>
                <div className="footer-name-date">
                    <div />
                    <div className="footer-name">
                        <p>Name : {props.nftName}</p>
                    </div>
                    <div className="footer-date">
                        <p>{props.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}