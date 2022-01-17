import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import SideNav from './components/sideNav/sideNav'
import Coin from './components/coins/coin'
import ButtonBacktoTop from './components/buttonBackToTop/buttonBackToTop';
import ButtonRefresh from './components/buttonRefresh/buttonRefresh'

function App() {
  const [topThreeCoins, setTopThreeCoins] = useState([])

  // Gather information from API for the top 3 coins based on their market capitalization
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=3&page=1&sparkline=false')
      .then(res => {
        setTopThreeCoins(res.data);
      }).catch(error => alert(error))
  }, []);

  // Return HTML to display the side navigation, coins, and buttons that refresh the page and send the page back to the top
  return (
    <div className='background'>
      <SideNav />
      <div className='coinList'>
        {topThreeCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              currentPrice={coin.current_price}
              allTimeHigh={coin.ath}
            />
          )
        })}
      </div>
      <ButtonBacktoTop />
      <ButtonRefresh />
    </div>
  );
}

export default App;
