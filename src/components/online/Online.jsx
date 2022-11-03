import "./online.css";

const Online = ({ Users }) => {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={Users.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{Users.username}</span>
        </li>
    );
};

export default Online;