import './Profile.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile(props) {

  const [user, setUser] = useState({});
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);

  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/auth/me', config)
      .then(response => {
        setNotLogged(false)
        setUser(response.data)
      })
    }

  }, [mounted])

  return (
    <div className='profile'>
      <div className='profile-img'>
        <img src='https://scontent.fbps1-1.fna.fbcdn.net/v/t1.6435-9/138225252_10218338830292894_615168904657997840_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE6eIm96dfq1gFYcmkr7a907IpguM2h8hzsimC4zaHyHG-mjHTV3bw-vcJlbPquiK8&_nc_ohc=51RP1jYJByEAX-dL_lV&_nc_ht=scontent.fbps1-1.fna&oh=62799e7da9c7c49e929f49422f3e69a6&oe=61C5DB4D' alt='Marla' />
      </div>
      {
        !notLogged ? (
          <>
            <h2>{user.name}</h2>
            <span>Email: {user.email}</span>
            <span>Membro desde: {user.createdAt}</span>
          </>
        ) : (
          <h2>Sem dados do perfil, faça login.</h2>
        )
      }
    </div>
  )
}