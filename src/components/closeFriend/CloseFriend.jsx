import "./closefriend.css";

const CloseFriend = ({ users }) => {
    return (
        <li className=" flex m-2 sidebarFriend">
            <img className="sidebarFriendImg" src={users.profilePicture} alt="" srcset="" />
            <span className="sidebarFriendName">{users.username}</span>
        </li>
    );
};

export default CloseFriend;