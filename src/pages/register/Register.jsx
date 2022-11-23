import { useState } from 'react';
import chats from "../../assets/images/chat.png"
import chat from "../../assets/images/vraiChat.svg"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { loginPeding, loginSuccess, loginFailed } from '../../app/loginSlice'

const Register = () => {
    const [name, setName] = useState()
    const [mail, setMail] = useState()
    const [pass, setPass] = useState()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const createCompte = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8800/api/auth/register"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: name,
                    email: mail,
                    password: pass
                })
            })
            const result = await response.json()
            if (!result) {
                dispatch(loginFailed(result.message))
            }
            else {
                dispatch(loginSuccess(result))
                navigate('/login')
            }

        }
        catch (err) {
            dispatch(loginFailed(err));
        }
    }

    return (
        <main className='flex justify-center items-center h-[100vh] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-xl' style={{ backgroundColor: "#ffffff " }}>
            <div style={{ width: "700px", height: "500px" }} className="flex justify-center">
                <div className='hidden m-5 md:block md:w-[50%] p-3 ' style={{ backgroundColor: "#ffffff" }}>
                    <img src={chat} alt="" srcset="" className='w-full h-full object-cont' />
                </div>

                <div className=' bg-white w-[100%]  flex flex-col items-center justify-center'>
                    <div className='flex flex-col justify-center items-center m-2'>
                        <h1 style={{ color: "blue" }} className="text-bold text-2xl align-center">Welcome to Sumulia Chat</h1>
                        <img src={chats} alt="Photo" className='w-20 h-20  object-cover text-center rounded-full  md:hidden' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="benjamin vernau" required="" onChange={e => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email adress</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="name@company.com" required="" onChange={e => setMail(e.target.value)} />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="************" required="" onChange={e => setPass(e.target.value)} />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={createCompte}>Sing In</button>
                                <p className="flex justify-end m-2 items-end text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account ? <Link to="/login" className="font-medium text-blue-900 hover:underline dark:text-primary-500">Sing Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;