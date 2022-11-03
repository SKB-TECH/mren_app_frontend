import "./closefriend.css";

const CloseFriend = ({ users }) => {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={users.profilePicture} alt="" srcset="" />
            <span className="sidebarFriendName">{users.username}</span>
        </li>
    );
};

export default CloseFriend;