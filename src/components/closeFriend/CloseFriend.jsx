import "./closefriend.css";
import { useContext } from "react";
import avatar from '../../assets/images/avatar.png'
import '../online/online.css'
import { useSelector, useDispatch } from 'react-redux';
import { setChats, setRecever, setSender } from "../../app/messageSlice";
import { StateContext } from "../../Context/contextApi";

const CloseFriend = ({ users }) => {
    const dispatch = useDispatch()
    const { contenu, setContenu } = useContext(StateContext)
    localStorage.setItem('recever', useSelector(state => state.messages.recever))
    const messages = useSelector(state => state.messages.message)
    const chat = useSelector(state => state.messages.chats)

    // Cette fonction sert a trier les messages selon l'utilisateur selectionne
    const creatChat = (recever) => {
        dispatch(setChats(messages.message?.filter((sms) => {
            return (sms.sender == recever) || (sms.recever == recever)
        })))
    }


    return (
        <li className=" flex mb-2 sidebarFriend cursor-pointer hover:bg-blue-900 text-white  rounded-lg " onClick={() => { creatChat(users._id), dispatch(setRecever(users._id)) }}>
            <div className="flex cursor-pointer" >
                <img className="position-relative sidebarFriendImg" src={avatar} alt="" />
                <span className={`flex flex-col hover:text-white text-gray-500 sidebarFriendNam`} key={users._id}>
                    {users.username}
                    <p>{users.email}</p>
                </span>
            </div>
        </li>
    );
};

export default CloseFriend;