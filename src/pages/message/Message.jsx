import React from 'react';
import SidebarMessage from './components/SidebarMessage';
import Sidebar from '../../components/sidebar/Sidebar';

import Chat from './components/Chat';
import Topbar from '../../components/topbar/Topbar';

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