import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const Send = () => {

    const chats = useSelector(state => state.messages.chats)
    return (
        <div className='flex  flex-col justify-between w-full'>
            {
                chats ? chats.map((sms) => {
                    if (sms.sender === localStorage.getItem('sender')) {
                        return (
                            <div className='flex flex-start'>
                                <span className='bg-gray-300 flex flex-col text-black p-3 m-2 h-fit rounded-r-3xl rounded-bl-3xl '>
                                    {
                                        sms.message
                                    }

                                </span>
                            </div>
                        )
                    } else {
                        return (
                            <div className='flex flex-end'>
                                <span className='bg-[blue] flex-end flex flex-col p-3 m-2 h-fit rounded-l-3xl rounded-br-3xl text-gray-100'>
                                    {
                                        sms.message
                                    }
                                </span>
                            </div>
                        )
                    }
                }
                ) :
                    <div className='flex flex-col justify-center items-center'><h1>Pas des Messages</h1></div>
            }
            {/* {
                chats?.map((sms) => {
                    if (sms.sender === localStorage.getItem('sender')) {
                        return (
                            <div className='flex flex-start'>
                                <span className='bg-gray-300 flex flex-col text-black p-3 m-2 h-fit rounded-r-3xl rounded-bl-3xl '>
                                    {
                                        sms.message
                                    }

                                </span>
                            </div>
                        )
                    } else {
                        return (
                            <div className='flex flex-end'>
                                <span className='bg-[blue] flex-end flex flex-col p-3 m-2 h-fit rounded-l-3xl rounded-br-3xl text-gray-100'>
                                    {
                                        sms.message
                                    }
                                </span>
                            </div>
                        )
                    }
                }
                )
            } */}
        </div>
    )
}

export default Send;