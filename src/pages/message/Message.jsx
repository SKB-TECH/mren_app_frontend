
import { React, useEffect, useState } from 'react';
import SidebarMessage from './components/SidebarMessage';
import Chat from './components/Chat';
import Topbar from '../../components/topbar/Topbar';
import { useSelector, useDispatch } from 'react-redux';
import { messagePeding, getMessage, setMessage, messageFailed } from '../../app/messageSlice'



const Message = () => {
    return (
        <div className='h-[100vh]'>
            <Topbar />
            <div className='flex justify-between h-[100%]'>
                <SidebarMessage />
                <Chat />
            </div>
        </div>
    );
};

export default Message;