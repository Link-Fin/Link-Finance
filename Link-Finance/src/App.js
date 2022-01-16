import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import {Drawer} from '@mui/material';
import SideNav from './components/sideNav/sideNav'

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(error => alert('API URL is incorrect!'))
  }, []);

  return (
    <div className='background'>
        <SideNav />
    </div>
  );
}

export default App;
