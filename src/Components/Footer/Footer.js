import './Footer.css';
import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

export default function Footer(){

    return(
        <div className='footer'>
            <div className='midias'>
                <FiFacebook />
                <FaInstagram />
                <FiLinkedin />
                <FiYoutube />
                <FiTwitter />
            </div>
            <span>&copy;Direitos autorais @devmarlacabral - 2021 </span>
        </div>
        
    )
}