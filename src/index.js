import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import {
  BrowserRouter,
  Routes,
  Route,
  }
  from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/lista' element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)