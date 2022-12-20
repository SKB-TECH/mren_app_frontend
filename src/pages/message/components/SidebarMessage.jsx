import { useEffect } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getUsers } from '../../../app/users';
import React from 'react'

const URL = import.meta.env.VITE_BASE_BACK
const SidebarMessage = (props) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users)
    
    useEffect(() => {
        axios.get(`${URL}/api/user`)
            .then((res) => dispatch(getUsers(res.data)))
    }, [])

    return (
        <div className='flex flex-row z-20  h-full fixed md:w-[30%]' >
            <Sidebar setContact={props.setContact} />
        </div>
    );
};

export default React.memo(SidebarMessage);