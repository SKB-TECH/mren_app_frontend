import React from 'react';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Forget from './pages/forget/Forget';
import Message from './pages/message/Message';
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/forget' element={<Forget />}></Route>
        <Route path='/message' element={<Message />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;