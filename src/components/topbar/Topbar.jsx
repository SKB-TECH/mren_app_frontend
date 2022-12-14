import "./topbar.css"
import { GoSearch, GoPerson } from 'react-icons/go'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { MdNotifications } from 'react-icons/md'
import { Link } from "react-router-dom"
import Message from "../../pages/message/Message"
const Topbar = () => {
    return (
        <div className='bg-blue-900 topbarContainer fixed z-30'>
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>Sumulia</span>
                </Link>
            </div>
            <div className="hidden md:inline-block w-5 topbarCenter">
                <div className="">
                    <img src="" alt="" srcset="" />
                    <span className="text-white">Shako</span>
                </div>

            </div>
           
        </div>
    );
};

export default Topbar;