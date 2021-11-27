import './Game.css';
import { IoLogoBitcoin } from 'react-icons/io';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Game() {

  const state = useLocation()
  const id = state.state;

  const [game, setGame] = useState({})
  const [mounted, setMounted] = useState(false)

  const getData = async () => {
    await axios.get(`/game/find/${id}`)
    .then(response => {
      if(mounted) {
        setGame(response.data)
        console.log(game)
      }
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])

  return(
    <div className='game'>
      <div className='game-header'>
        <img src={game.image} alt={game.name} />
      </div>

      <div className='game-wish'>
        <h2>{game.name}</h2>
        <span><IoLogoBitcoin />{game.price}</span>
          <a href='!#'>
            <BiHappyHeartEyes />
          </a>

      </div>
      <div className='game-like'>
          <h3>{game.year}</h3>

          
        </div>
      <p>{game.storyline}</p>
    </div>
  )
}