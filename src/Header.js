import './App.css';

export default function Header(props){
    return (
        <div className="header-layout">
            <div className="header-title">{props.title}</div>
            <div className="header-icons">
                {(props.icons)?
                <>
                    <div>
                    <img src= {props.icon1}/>
                    </div>
                    <div>
                        <img src = {props.icon2}/>
                    </div>
                </>
                :
                    null
                }
            </div>
        </div>
    );
}