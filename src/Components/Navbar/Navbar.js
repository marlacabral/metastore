import React from 'react';
import { SiYoutubegaming } from 'react-icons/si';
import { BiHappyHeartEyes } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
import './Navbar.css';
import logo from './logoMetaVetor.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo' >
                <a href='/'>
                    <img src={logo} alt='metastore'></img>
                </a>
                <h2>metastore</h2>
            </div>

            <div className='navbar-list'>
                <ul className='navbar-list-item'>
                    <li>
                        <a className='items' href='/wishlist'>
                        <BiHappyHeartEyes /><p >Favoritos</p>
                        </a>
                    </li>

                    <li>
                        <a className='items' href='/login'>
                        <RiLockPasswordLine /><p className='text'>Login</p>
                        </a>
                    </li>

                    <li>
                        <a className='items' href='/register'>
                        <RiLockPasswordLine />
                        <p className='text'>Criar</p>
                        </a>
                    </li>
                    
                    <li>
                        <a className='items' href='/profile'>
                        <RiLockPasswordLine />
                        <p className='text'>Perfil</p>
                        </a>
                    </li>

                </ul>
            </div>


        </div>

    )
}

export default Navbar;