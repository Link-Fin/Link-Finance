import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import SideNav from './components/sideNav/sideNav'
import Coin from './components/coins/coin'

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      }).catch(error => alert(error))
  }, []);

  return (
    <div className='background'>
      <SideNav />
      {coins.map(coin => {
        return (
          <Coin
            name={coin.name}
            image={coin.image}
          />
        )
      })}
    </div>
  );
}

export default App;
