import "./rightbar.css"

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/src/assets/person/gift.jpeg" alt="" />
                    <span className="birthdayText">
                        <b>Doddy Matabaro</b> and <b> 3 other friends </b> have to birthday to day
                    </span>
                </div>
            </div>
            <img className="rightbarAd" src="/src/assets/person/ad.jpg" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="/src/assets/person/bck.jpg" alt="" />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Gloire Mutaliko</span>
                </li>
                {/* 1 */}
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="/src/assets/person/bck.jpg" alt="" />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Gloire Mutaliko</span>
                </li>

                {/* trois */}
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="/src/assets/person/bck.jpg" alt="" />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Gloire Mutaliko</span>
                </li>
            </ul>
        </div>
    );
};

export default Rightbar;