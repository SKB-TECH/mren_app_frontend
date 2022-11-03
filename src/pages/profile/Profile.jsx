import "./profile.css";
import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightBar/Rightbar';


const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="../../../src/assets/post/3.jpeg" alt="" />

                            <img className="profileUserImg" src="../../../src/assets/person/7.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Shako Kinyamba</h4>
                            <span className="profileInfoDesc">
                                Ville de Goma en DRC
                            </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;