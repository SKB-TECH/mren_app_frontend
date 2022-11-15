import React from 'react';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import Home from "../src/pages/home/Home"
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Forget from './pages/forget/Forget';
import Message from './pages/message/Message';
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile/:username' element={<Profile />}></Route>
        <Route path='/forget' element={<Forget />}></Route>
        <Route path='/message' element={<Message />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;