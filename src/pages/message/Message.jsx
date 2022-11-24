
import { React, useEffect, useState } from 'react';
import SidebarMessage from './components/SidebarMessage';
import Topbar from '../../components/topbar/Topbar';
import Chat from './components/Chat'
    
  const Message=()=>{  

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
export default Message;