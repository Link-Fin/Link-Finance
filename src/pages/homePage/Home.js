import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import SideNav from '../../components/sideNav/sideNav';
import Coin from '../../components/coins/coin';
import NewsArticle from '../../components/newsArticle/newsArticle';
import ButtonBackToTop from '../../components/buttonBackToTop/buttonBackToTop';
import ButtonRefresh from '../../components/buttonRefresh/buttonRefresh';

function Home() {
  let articleCounter = 0;

  const [topThreeCoins, setTopThreeCoins] = useState([])
  // const [topThreeStocks, setTopThreeStocks] = useState([])
  const [latestArticles, setLatestArticles] = useState([])

  // Gather information from API for the top 3 coins based on their market capitalization
  useEffect(() => {
    const finnhub = require('finnhub');
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c86s93qad3ib8jk17260"
    const finnhubClient = new finnhub.DefaultApi()

    finnhubClient.marketNews("general", {}, (error, data, response) => {
      setLatestArticles(data);
    })

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=3&page=1&sparkline=false')
      .then(res => {
        setTopThreeCoins(res.data);
      }).catch(error => alert(error))
  }, []);

  articleCounter = 0;

  // Return HTML to display the side navigation, coins, and buttons that refresh the page and send the page back to the top
  return (
    <div className='background'>
      <SideNav />
      <div className='headings'>Top Three Cryptocurrencies</div>

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

      <div className='headings'>Latest Articles</div>

      <div className='NewsArticle'>
        {latestArticles.map((article, i) => {
          if (articleCounter++ < 16) {
            if (article.headline[0] === ':') {
              var tempHeadline = article.headline.slice(2, article.headline.length);
              article.headline = tempHeadline;
            }
            if (article.summary === '') {
              article.summary = "Summary Not Available";
            }

            return (
              <NewsArticle
                key={i}
                articleKey={article.key}
                headline={article.headline}
                summary={article.summary}
                url={article.url}
              />
            )
          }
          else{
            return(null)
          }
        })}
      </div>

      <ButtonBackToTop />
      <ButtonRefresh />
    </div>
  );
}

export default Home;
