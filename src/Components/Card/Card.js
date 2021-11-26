import './Card.css';
import { IoLogoBitcoin } from 'react-icons/io' ;   
import { BiHappyHeartEyes } from 'react-icons/bi'


export default function Card(props){

    return(
        <div className='card'>   
            <a className='card-item' href={props.linkItem}>   

                <div className='card-img'>
                    <img src='https://criptomonedasweb.com/pt/wp-content/uploads/2021/03/O-que-e-o-metaverso-no-contexto-da-criptomoeda.png' alt='Pirata'/>
                </div>

                <h3 className='card-title'>Piratas de Saturno</h3>

                <span className='card-preco'><IoLogoBitcoin /><h3>0.001</h3></span>
            </a>

            <a className='wishlist' href={props.linkWish}>
            <BiHappyHeartEyes />
            </a>
            
        </div>
            
    )
}