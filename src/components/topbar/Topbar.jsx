import "./topbar.css"
import { GoSearch, GoPerson } from 'react-icons/go'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { MdNotifications } from 'react-icons/md'
import { Link } from "react-router-dom"
import Message from "../../pages/message/Message"
const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>Sumulia</span>
                </Link>
            </div>
            <div className="hidden md:inline-block topbarCenter">
                <div className="searchbar">
                    <GoSearch className='searchIcon' />
                    <input type="text" name="" id="" className='searchInput' placeholder='search friend or post' />
                </div>
            </div>

            <div className="topbarRight">
                <div className="hidden md:inline-block topbartLikns">
                    <span className='topbarLink'>Home</span>
                    <span className='topbarLink'>Time line</span>
                </div>
                <div className="topbarIcon">
                    <div className="topbarIconItem">
                        <Link>
                        <GoPerson />
                        <span className='topbarIconBadge'>1</span>
                        </Link>
                    </div>
                    <div className="topbarIconItem">
                        <Link to='/message'>
                            <BsFillChatLeftTextFill />
                            <span className='topbarIconBadge'>3</span>
                        </Link>
                    </div>

                    <div className="topbarIconItem">
                        <Link to='/Message'>
                            <MdNotifications />
                            <span className='topbarIconBadge'>3</span>
                        </Link>
                    </div>
                </div>
                <img src="/src/assets/person/1.jpg" alt="" className='topbarImage' />
            </div>
        </div>
    );
};

export default Topbar;