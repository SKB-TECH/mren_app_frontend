import "./sidebar.css"
import { MdRssFeed, MdSlowMotionVideo, MdWorkOutline, MdGroup, MdOutlineBookmark, MdOutlineEvent,MdSchool } from 'react-icons/md'
import { BsFillChatLeftTextFill, BsQuestionCircle } from "react-icons/bs"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListeItem">
                        <MdRssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                    </li>
                    <li className="sidebarListeItem">
                        <BsFillChatLeftTextFill className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Chats
                        </span>
                    </li>
                    <li className="sidebarListeItem">
                        <MdSlowMotionVideo className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Videos
                        </span>
                    </li>
                    <li className="sidebarListeItem">
                        <MdGroup className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Groupes
                        </span>
                    </li>

                    <li className="sidebarListeItem">
                        <MdOutlineBookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Groupes
                        </span>
                    </li>
                    <li className="sidebarListeItem">
                        <BsQuestionCircle className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Questions
                        </span>
                    </li>
                    <li className="sidebarListeItem">
                        <MdWorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Jobs
                        </span>
                    </li>
                    <li className="sidebarListeItem">
                        <MdOutlineEvent className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Events
                        </span>
                    </li>
                    <li className="sidebarListeItem">
                        <MdSchool className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Courses
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;