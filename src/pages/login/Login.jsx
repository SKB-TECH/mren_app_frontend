import React from 'react';
import chats from "../../assets/images/vraiChat.svg"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <main className='flex justify-center items-center h-[100vh] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-xl' style={{ backgroundColor: "#c6d0ff " }}>
            <div style={{ width: "900px", height: "600px" }} className="flex justify-center">
                <div className=' md:w-[50%] p-8 ' style={{ backgroundColor: "#ffffff" }}>
                    <img src={chats} alt="" srcset="" className='w-full h-full cover' />
                </div>

                <div className='bg-white w-[50%] flex flex-col items-center'>
                    <div className='mt-12'>
                        <h1 style={{ color: "blue" }} className="text-bold align-center">Welcome to Sumulia Chat</h1>
                    </div>
                    <div className='flex flex-col'>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="name@company.com" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to="/forget" className="text-sm font-medium text-blue-900 hover:underline dark:text-primary-500">Forgot password?</Link>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sing In</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account ? <Link to="/register" className="font-medium text-blue-900 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;



// import "./login.css"


// import { Link } from "react-router-dom";
// const Login = () => {
//     return (
//         <div className="login">
//             <div className="loginWrapper">
//                 <div className="loginLeft">
//                     <h3 className="loginlogo">Sumulia </h3>
//                     <span className="loginDesc">
//                         Connect with friends and the world on Sumalia
//                     </span>
//                 </div>
//                 <div className="loginRight">
//                     <div className="loginBox flex justify-center flex-column">
//                         <input placeholder="Email Adress" type="text" className="loginInput" />
//                         <input placeholder="Password" type="text" className="loginInput" />
//                         <button className="loginButton">Connexion</button>
//                         <span className="loginForgot">Are you forgot password ?</span>
//                         <Link to="/register">
//                             <butto className="loginCreateAccount">Create New Account</butto>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ); 
// };

// export default Login;