import "./topbar.css"
import { GoSearch, GoPerson } from 'react-icons/go'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { MdNotifications } from 'react-icons/md'
import { Link } from "react-router-dom"
import Message from "../../pages/message/Message"
import avatar from '../../assets/images/avatar.png'

const Topbar = () => {
    return (
        <div className='bg-blue-900 topbarContainer fixed z-30'>
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>Sumulia</span>
                </Link>
            </div>
            <div className="hidden justify-end lfex md:inline-block  w-5 topbarCenter">
                <div className="flex justify-end m-10 gap-10">
                    <img src={avatar} alt="" srcset="" className="w-12 h-12 rounded-full cursor-pointer" />
                    <button className="p-1 m-1 bg-blue-900 border-white border-2 rounded-lg text-gray-100 justify-start items-center
                    hover:opacity-50 hover:bg-blue-800 hover:translate-x-2 transition duration-500 ease-in-out hove:text-bold
                    
                    ">
                        Deconnexion
                    </button>
                </div>

            </div>
           
        </div>
    );
};

export default Topbar;