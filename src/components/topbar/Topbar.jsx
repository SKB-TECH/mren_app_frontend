import React from 'react';
import "./topbar.css"
import { GoSearch, GoPerson } from 'react-icons/go'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { MdNotifications } from 'react-icons/md'

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span>Sumulia</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <GoSearch />
                    <input type="text" name="" id="" className='searchInput' placeholder='search friend or post' />
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbartLikns">
                    <span className='topbarLinks'>Home</span>
                    <span className='topbarLinks'>Time line</span>
                </div>
                <div className="topbarIcon">
                    <div className="topbarIconItem">
                        <GoPerson />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className="topbarIconItem">
                        <BsFillChatLeftTextFill />
                        <span className='topbarIconBadge'>3</span>
                    </div>

                    <div className="topbarIconItem">
                        <MdNotifications />
                        <span className='topbarIconBadge'>3</span>
                    </div>
                </div>
                <img src="/src/assets/person/1.jpg" alt="" className='topbarImage' />
            </div>
        </div>
    );
};

export default Topbar;