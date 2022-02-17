import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Home.css';
import SideNav from '../../components/sideNav/sideNav'
import Coin from '../../components/coins/coin'
import ButtonBackToTop from '../../components/buttonBackToTop/buttonBackToTop';
import ButtonRefresh from '../../components/buttonRefresh/buttonRefresh'

function Home() {
  const finnhub = require('finnhub');

  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = "c86s93qad3ib8jk17260" // Replace this
  const finnhubClient = new finnhub.DefaultApi()

  const [topThreeCoins, setTopThreeCoins] = useState([])
  const [topThreeStocks, setTopThreeStocks] = useState([])

  // Gather information from API for the top 3 coins based on their market capitalization
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=3&page=1&sparkline=false')
      .then(res => {
        setTopThreeCoins(res.data);
      }).catch(error => alert(error))
  }, []);

  finnhubClient.symbolSearch('S&P', (error, data, response) => {
    console.log(data)
  });

  finnhubClient.quote("^GSPC", (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data)
    }
  });

  

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
      <ButtonBackToTop />
      <ButtonRefresh />
    </div>
  );
}

export default Home;
