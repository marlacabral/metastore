import React from 'react';
import { SiYoutubegaming } from 'react-icons/si';
import { BiHappyHeartEyes } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
import './Navbar.css';
import logo from './logoMeta.png';

const Navbar = () => {
    return (
        <header className='navbar'>
            
            <div className='navbar-logo'>
                <img className='logo' src={logo} alt='Metastore'/>
                <h1>metastore</h1>
            </div>

            <div className='navbar-list'>
                <ul>
                    <li>
                        <a className='items' href='#!'>
                        <SiYoutubegaming /> <span className='text'>Loja</span>
                        </a>
                    </li>
                    <li>
                        <a className='items' href='#!'>
                        <BiHappyHeartEyes />        <span className='text'>Favoritos</span>
                        </a>
                    </li>
                    <li>
                        <a className='items' href='#!'>
                        <RiLockPasswordLine /> <span className='text'>Login</span>
                        </a>
                    </li>
                </ul>
            </div>


        </header>

    )
}

export default Navbar;