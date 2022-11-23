import "./closefriend.css";
import { useState, useEffect } from "react";
import avatar from '../../assets/images/avatar.png'
import '../online/online.css'
import { useSelector, useDispatch } from 'react-redux';
import { setChats, setRecever, setSender } from "../../app/messageSlice";

const CloseFriend = ({ users }) => {
    const dispatch = useDispatch()
    localStorage.setItem('recever', useSelector(state => state.messages.recever))
    const messages = useSelector(state => state.messages.message)
    const chat = useSelector(state => state.messages.chats)
    const creatChat = (recever) => {
        dispatch(setChats(messages.message?.filter((sms) => {
            return (sms.sender == recever) || (sms.recever == recever)
        })))

        console.log("Chat", chat)
    }



    return (
        <li className=" flex m-2 sidebarFriend cursor-pointer " onClick={() => { creatChat(users._id), dispatch(setRecever(users._id)) }}>
            <div className=" flex cursor-pointer position-relative" >
                <img className="position-relative sidebarFriendImg" src={avatar} alt="" />
                <span className={`flex mt-2 text-gray-500 sidebarFriendNam`} key={users._id}>{users.username}
                </span>
            </div>
        </li>
    );
};

export default CloseFriend;