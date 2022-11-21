import "./closefriend.css";
import { useState, useEffect } from "react";
import avatar from '../../assets/images/avatar.png'
import '../online/online.css'
import { useSelector, useDispatch } from 'react-redux';
import { setRecever, setSender } from "../../app/messageSlice";

const CloseFriend = ({ users }) => {
    const dispatch = useDispatch()
    localStorage.setItem('recever', useSelector(state => state.message.recever))
    return (
        <li className=" flex m-2 sidebarFriend cursor-pointer " onClick={() => dispatch(setRecever(users._id))}>
            <div className=" flex cursor-pointer position-relative" >
                <img className="position-relative sidebarFriendImg" src={avatar} alt="" />
                <span className={`flex mt-2 text-gray-500 sidebarFriendNam`} key={users._id}>{users.username}
                </span>
            </div>
        </li>
    );
};

export default CloseFriend;