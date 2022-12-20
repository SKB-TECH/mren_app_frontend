import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { getMessage } from '../../../app/messageSlice';
import openSocket from 'socket.io-client';
import { addMessage, getChats } from '../../../app/messageSlice';


const url = import.meta.env.VITE_BASE_BACK;
const Send = () => {
    const dispatch = useDispatch()
    const socket = openSocket(url)
    const chats = useSelector(state => state.messages.chats);
    const sender = useSelector(state => state.messages.sender) || localStorage.getItem('sender')

    return (
        <div className='p-5'>
            {
                chats ? chats.map((sms) => {
                    if (sms && sms.sender === localStorage.getItem('sender')) {
                        return (
                            <div className='h-fit mt-10 flex justify-start'>
                                <span className='bg-gray-300 flex flex-col text-black p-3 m-2 h-fit rounded-r-3xl rounded-bl-3xl '>
                                    {
                                        sms.message
                                    }
                                </span>
                            </div>
                        )
                    } else {
                        return (
                            <div className='h-fit flex  justify-end ml-10'>
                                <span className='bg-blue-900  flex flex-col p-3 m-2 h-fit rounded-l-3xl rounded-br-3xl text-gray-100 '>
                                    {
                                        sms.message
                                    }
                                </span>
                            </div>
                        )
                    }
                }
                ) :
                    <div className='flex flex-col justify-center items-center'><h1>Pas des Messages</h1></div>
            }
        </div>
    )
}

export default React.memo(Send);