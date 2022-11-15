import React from 'react';
import Forms from './Form';
import Send from './Send';
import Recever from "./Recever"
const Chat = () => {
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