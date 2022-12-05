import { useEffect, useState } from 'react';
import SidebarMessage from './components/SidebarMessage';
import Topbar from '../../components/topbar/Topbar';
import Chat from './components/Chat'
import React from 'react'

const Message = () => {  
    return (
        <div className='h-[100vh]'>
            <Topbar />
            <div className='flex justify-between h-[100%]'>
                <SidebarMessage />
                <Chat/> 
            </div>
        </div>
    );
}

export default React.memo(Message);