import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Recever = () => {
    const recever = useSelector(state => state.messages.recever)
    const message = useSelector(state => state.messages.message)
    
    return (
        <div className='flex justify-end  '>
            <span className='text-gray-100 p-5 m-2 h-fit rounded-l-3xl rounded-br-3xl' style={{ backgroundColor: " #1877f6" }}>
                Lorem Commodi, laboriosam.
            </span>
        </div>
    );
};

export default Recever;