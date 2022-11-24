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
        <div className='flex flex-row z-20  h-full fixed md:w-[30%]' >
            <Sidebar setContact={props.setContact} />
        </div>
    );
};

export default SidebarMessage;