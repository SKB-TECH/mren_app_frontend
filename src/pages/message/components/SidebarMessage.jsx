import { React, useEffect } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getUsers } from '../../../app/users';

const SidebarMessage = (props) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users)
    
    useEffect(() => {
        axios.get('http://localhost:8800/api/user')
            .then((res) => dispatch(getUsers(res.data)))
    }, [])

    return (
        <div className='hidden flex flex-row  fixed md:inline-block w-[30%] h-[100%] z-0 p-2 ' >
            <Sidebar setContact={props.setContact} />
        </div>
    );
};

export default SidebarMessage;