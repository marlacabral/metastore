import Slider from '../../Components/Slider/Slider';
import Search from '../../Components/Search/Search';
import Card from '../../Components/Card/Card';
import Container from '../../Components/Container/Container';
import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home(){

    const [games, setGames] = useState([]);
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get("/game/findMany").then((response) => {
        if (mounted) {
            setGames(response.data);
        }
        });
    };

    useEffect(() => {
        setMounted(true);
        getData();
    }, [mounted]);



    return(
        <div classname='home'>
            <div className='search-slider'>
                <Search />
                <Slider 
                id="b1ef3772-5067-48d0-a6ff-5b44c27c2c7b"
                alt='Metaverso'
                />
            </div>
            <Container title='Mais relevantes para você'>
            {
            games.map(game => (
            <Card 
                id={game.id}
                image={game.image}
                title={game.name}
                preco={game.price}
                key={game.id}
            />
            ))
        }
            </Container>
        </div>
    )
}