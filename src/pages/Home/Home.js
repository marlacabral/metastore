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
        <div>
            {/* <Slider 
            id="req_ea6e8f97ea2c41cab3fcc5f4b8b38d61"
            alt='Metaverso'
            /> */}
            <Search />
            <Container title='Mais vendidos'>
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