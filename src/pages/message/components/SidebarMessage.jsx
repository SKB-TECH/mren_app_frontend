import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';

const SidebarMessage = () => {
    return (
        <div className='hidden fixed md:inline-block w-[30%] h-[100%] z-0 p-2 ' style={{ backgroundColor: " #1877f6" }}>
            <div>
                Bonjour
            </div>
        </div>
    );
};

export default SidebarMessage;