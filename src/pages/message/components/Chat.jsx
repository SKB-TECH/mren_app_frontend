import React from 'react';
import Forms from './Form';
import Send from './Send';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../../../app/messageSlice';
import dotenv from 'dotenv'
import openSocket from 'socket.io-client';

const user = localStorage.getItem('sender')
const API_URI = import.meta.env.VITE_BASE_BACK
const Chat = () => {
    const dispatch = useDispatch()
    const sender = localStorage.getItem('sender')

    useEffect(() => {
        const fecthMessages = async () => {
            if (sender) {
                axios.get(`${API_URI}/api/message/read/${sender}`)
                    .then(res => {
                        if (res.statusText == "OK") {
                            dispatch(getMessage(res.data))
                        }
                    }).catch(error => console.log(error))
            }
        }
        fecthMessages()

    }, [sender])


    return (
        <div className='flex flex-col z-0 h-fit md:w-[70vw] ml-[30%] '>
            <div className='flex flex-col  sm:justify-between pb-14'>
                <h1 className='text-gray-200 text-xl text-center'>message list</h1>
                <Send />
            </div>

            <div className=' fixed  bottom-0' >
                <Forms />
            </div>
        </div >
    );
};

export default React.memo(Chat);