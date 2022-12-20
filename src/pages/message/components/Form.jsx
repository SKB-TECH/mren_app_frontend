import { useRef, useState, useContext, useEffect } from 'react';
import { RiEmotionUnhappyLine, RiSendPlaneFill } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, getChats } from '../../../app/messageSlice';
import openSocket from 'socket.io-client';
import React from 'react';
import { chainPropTypes } from '@mui/utils';
import axios from 'axios';
import { getMessage } from '../../../app/messageSlice';


const url = import.meta.env.VITE_BASE_BACK;
const socket = openSocket(url)
const Forms = () => {
    const [msgContent, setmsgContent] = useState()
    const [msg, setMsg] = useState()
    const dispatch = useDispatch()

    const recever = useSelector(state => state.messages.recever) || localStorage.getItem('recever')
    const sender = useSelector(state => state.messages.sender) || localStorage.getItem('sender')

    const sendMessage = async (e) => {
        e.preventDefault()
        await fetch(`${url}/api/message/new/${sender}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sender,
                message: msg,
                recever
            })
        },
        ).then(res => res.json())
            .then(res => dispatch(getChats(res)))
            .then(res => console.log(res))
        setMsg('')
    }


    return (
        <div className='flex bg-white border-1  w-[100vw]'>
            <form className="w-[100%] flex justify-between" method='POST' onSubmit={sendMessage} >
                <div className="flex items-center py-2 px-3 gap-2 bg-gray-50 rounded-lg dark:bg-gray-700 w-[100vw] p-5">
                    <RiEmotionUnhappyLine className='text-4xl text-blue-500 mt-2 ml-3' />
                    <input id="chat" rows="1" className="block mr-4 p-2.5 w-[60%] text-sm text-gray-900 bg-white rounded-lg border focus:border-blue-500  dark:focus:border-blue-500 outline-none" placeholder="Your message..." value={msg} onChange={(e) => setMsg(e.target.value)}></input>
                    <button type="submit">
                        <RiSendPlaneFill className='text-4xl text-blue-500 mt-2' />
                    </button>
                </div>
            </form>

        </div>
    );
};

export default React.memo(Forms);