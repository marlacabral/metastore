import './Slider.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Slider(props){

    const [game, setGame] = useState([]);
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get(`/game/find/${props.id}`)
        .then(response => {
        if(mounted) {
            setGame(response.data)
        }
        })
    }

    useEffect(() => {
        setMounted(true)
        getData()
    }, [mounted])


    return(
        <div>
            <div className='slider'>
            
                <span className='slider-text'>Jogos em Destaque</span>

                <img className='image' src={game.image} alt={game.name} />

                <button className='btn-descubra'>
                    <a href={props.cardLink}>Descubra Mais</a>
                </button>
            </div>

        </div>
    )
}