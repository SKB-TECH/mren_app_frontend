import "./ori.css"
import CloseFriend from "../closeFriend/CloseFriend";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getUsers } from "../../app/users";
import axios from "axios";

const Sidebar = (props) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users.users)
    useEffect(() => {
        axios.get('http://localhost:8800/api/user')
            .then((res) => dispatch(getUsers(res.data)))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">

                <button className="sidebarButton">Followers Friends</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {
                        user.map((users) => (
                            <CloseFriend key={users._id} users={users} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;