import React from 'react';
import chats from "../../assets/images/vraiChat.svg"
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <main className='flex justify-center items-center h-[100vh] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-xl' style={{ backgroundColor: "#c6d0ff " }}>
            <div style={{ width: "900px", height: "600px" }} className="flex justify-center">
                <div className=' md:w-[50%] p-8 ' style={{ backgroundColor: "#ffffff" }}>
                    <img src={chats} alt="" srcset="" className='w-full h-full cover' />
                </div>

                <div className='bg-white w-[50%] flex flex-col items-center'>
                    <div className=" space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your account
                        </h1>
                        <form className="space-y-4 w-full md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>

                            <button type="submit" className="w-full text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sing In</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                you have an account ? <Link to="/login" className="font-medium text-blue-900 hover:underline dark:text-primary-500">Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;