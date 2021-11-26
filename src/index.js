import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Wishlist from './pages/Wishlist/Wishlist';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Game from './pages/Game/Game';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  }
  from 'react-router-dom';
import './index.css';

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={< Register/>} />
        <Route path="/profile" element={< Profile/>} />
        <Route path="/game" element={<Game />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);