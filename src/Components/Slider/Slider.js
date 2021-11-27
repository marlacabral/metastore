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
        <div className='slider'>
            
                <button className='btn-descubra'><a href={props.cardLink}><h3>Lançamentos</h3></a>
                </button>
       

            <div className='slider-image'>
                <img src='https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_CA/games/switch/g/grand-theft-auto-the-trilogy-the-definitive-edition-switch/hero?v=2021111508' alt={game.name} />
            </div>
        </div>

    )
}