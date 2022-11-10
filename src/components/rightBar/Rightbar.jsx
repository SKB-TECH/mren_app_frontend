import "./rightbar.css"
import { Users } from "../../assets/dummyData"
import Online from "../online/Online";
const Rightbar = ({ profile }) => {

    const HomeRightbar = () => {
        return (

            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/src/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Doddy Matabaro</b> and <b> 3 other friends </b> have to birthday to day
                    </span>
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
            </>
        )
    }

    const ProfileRightbar = () => {
        return (

            <>
                <h4 className="rightbarTitle">User Info</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">DRC </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Goma </span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">Single </span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friend</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing ">
                        <img src="../../../src/assets/person/1.jpeg" className="rightbarFollowingImg" alt="" />
                        <sapn className="rightbarFollowingName">Shako kinyamba benjamin</sapn>
                    </div>
                    <div className="rightbarFollowing ">
                        <img src="../../../src/assets/person/2.jpeg" className="rightbarFollowingImg" alt="" />
                        <sapn className="rightbarFollowingName">Shako kinyamba benjamin</sapn>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="../../../src/assets/person/3.jpeg" className="rightbarFollowingImg" alt="" />
                        <sapn className="rightbarFollowingName">Shako kinyamba benjamin</sapn>
                    </div>
                    <div className="rightbarFollowing ">
                        <img src="../../../src/assets/person/4.jpeg" className="rightbarFollowingImg" alt="" />
                        <sapn className="rightbarFollowingName">Shako kinyamba benjamin</sapn>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {
                    profile ? <ProfileRightbar /> : <HomeRightbar />
                }
            </div>
        </div>
    );
};

export default Rightbar;