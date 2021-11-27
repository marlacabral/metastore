import './Search.css';
import { FaSearch } from 'react-icons/fa';

export default function Search(){

    return(
        <div className='search'>
            <form className='search-input'>
                <input type='text' className='search-text' placeholder='Digite o nome de um jogo'></input>
                
                <button className='btn-search'><FaSearch/></button>         
                
            </form>
        </div>
    )
}
