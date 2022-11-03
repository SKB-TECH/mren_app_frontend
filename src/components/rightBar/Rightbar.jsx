import "./rightbar.css"
import { Users } from "../../assets/dummyData"
import Online from "../online/Online";
const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/src/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Doddy Matabaro</b> and <b> 3 other friends </b> have to birthday to day
                    </span>
                </div>
            </div>
            <img className="rightbarAd" src="/src/assets/person/ad.jpg" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {
                    Users.map((users) => (
                        <Online key={users.id} Users={users} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Rightbar;