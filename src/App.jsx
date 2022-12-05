import React from 'react';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Message from './pages/message/Message';
import './index.css'
import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getMessage } from './app/messageSlice';
import openSocket from 'socket.io-client';
import { addMessage, getChats } from './app/messageSlice';
const url = import.meta.env.VITE_URL_BACK

const App = () => {
  const dispatch = useDispatch()
  const socket = openSocket(url)
  const chats = useSelector(state => state.messages.chats);
  const sender = useSelector(state => state.messages.sender) || localStorage.getItem('sender')

  useEffect(() => {
    socket.on('message', data => {
      const getMes = async () => {
        axios.get(`${url}/api/message/read/${sender}`)
          .then(res => {
            if (res.statusText == "OK") {
              //console.log('res ook', res);
              dispatch(getMessage(res.data))
              dispatch(getChats(data))
            }
          }).catch(error => console.log(error))
      }
      getMes()

    })
  }, [chats])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/message' element={<Message />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;