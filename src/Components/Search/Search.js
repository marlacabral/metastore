import './Search.css';
import { FaSearch } from 'react-icons/fa';

export default function Search(){

    return(

        <div>
            <span>Buscar: </span>
            <form className='search-input'>
                <input type='text' className='buscar' placeholder='Digite o nome do jogo'></input>
                
                <button><FaSearch/></button>         
                
            </form>
        </div>
    )
}
