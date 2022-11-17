import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';

const SidebarMessage = () => {
    return (
        <div className='hidden flex flex-row  fixed md:inline-block w-[30%] h-[100%] z-0 p-2 ' >
            <Sidebar />
        </div>
    );
};

export default SidebarMessage;