import { useRef } from 'react';
import React from 'react';
import { RiEmotionUnhappyLine, RiSendPlaneFill } from "react-icons/ri"
const Forms = () => {



    return (
        <div className='flex bg-white border-1  w-[100vw]'>

            <form className="w-[100%] flex justify-between">

                <label for="chat" class="sr-only">Your message</label>
                <div class="flex items-center py-2 px-3 gap-2 bg-gray-50 rounded-lg dark:bg-gray-700 w-[100vw] p-5">
                    <RiEmotionUnhappyLine className='text-4xl text-blue-500 mt-2 ml-3' />
                    <textarea id="chat" rows="1" class="block mr-4 p-2.5 w-[60%] text-sm text-gray-900 bg-white rounded-lg border focus:border-blue-500  dark:focus:border-blue-500 outline-none" placeholder="Your message..."></textarea>
                    <button type='submit'>
                        <RiSendPlaneFill className='text-4xl text-blue-500 mt-2' />
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Forms;