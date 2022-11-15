import "./ori.css"
import CloseFriend from "../closeFriend/CloseFriend";
import { MdRssFeed, MdSlowMotionVideo, MdWorkOutline, MdGroup, MdOutlineBookmark, MdOutlineEvent, MdSchool } from 'react-icons/md'
import { BsFillChatLeftTextFill, BsQuestionCircle } from "react-icons/bs"
import { Users } from "../../assets/dummyData"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">

                <button className="sidebarButton">Followers Friends</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {
                        Users.map((users) => (
                            <CloseFriend key={users.id} users={users} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;