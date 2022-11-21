import React from 'react';
import Forms from './Form';
import Send from './Send';
import Recever from "./Recever"
import axios from 'axios';
import { useEffect, useState } from 'react';


const Chat = () => {
    // const API_URI = 'http://localhost:8800'
    // useEffect(() => {
    //     const fecthMessages = async () => {

    //         const sender = localStorage.getItem('user') || null

    //         const res = await axios.get(`${API_URI}/api/message/read/${sender}`, {
    //             data: {
    //                 recId: props.contact
    //             }
    //         }).then(res => console.log(res.data))
    //     }
    //     fecthMessages()
    // }, [props.contact])
    return (
        <div className='flex flex-col  sm:ml-[30%]  w-[100vw] h-fit md:w-[70vw]'>
            <div className='flex flex-col  sm:justify-between pb-14  '>
                <h1 className='text-gray-200 text-xl text-center'>message list</h1>
                <Send/>
                <Recever/>
            </div>

            <div className=' fixed  bottom-0' >
                <Forms />
            </div>

        </div >
    );
};

export default Chat;