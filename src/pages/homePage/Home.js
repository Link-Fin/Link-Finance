import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import NavBar from '../../components/navBar/navBar';
import Coin from '../../components/coins/coin';
import NewsArticle from '../../components/newsArticle/newsArticle';
import ButtonBackToTop from '../../components/buttonBackToTop/buttonBackToTop';

const Home = () => {
  let articleCounter = 0;

  const [width, setWindowWidth] = useState(0);
  const [topThreeCoins, setTopThreeCoins] = useState([]);
  const [globalMarketInfo, setGlobalMarketInfo] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  // Gather information from API for the top 3 coins based on their market capitalization
  // Gather information regarding latest news articles
  useEffect(() => {
    const finnhub = require('finnhub');
    const apiKeyArticles = finnhub.ApiClient.instance.authentications['api_key'];
    apiKeyArticles.apiKey = "c86s93qad3ib8jk17260";
    const finnhubClient = new finnhub.DefaultApi();

    finnhubClient.marketNews("general", {}, (error, data, response) => {
      setLatestArticles(data);
    })

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=3&page=1&sparkline=false')
      .then(res => {
        setTopThreeCoins(res.data);
      }).catch(error => alert(error))
  }, []);

  // Gather information from API regarding global crypto market status
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/global')
      .then(res => {
        setGlobalMarketInfo(res.data);
      }).catch(error => alert(error))
  }, []);

  console.log(globalMarketInfo.data);

  articleCounter = 0;

  // Return HTML to display the side navigation, coins, and buttons that refresh the page and send the page back to the top
  return (
    <div className='background' width={width}>
      <NavBar />
      <div type='text' className='marketDominance'>BTC: </div>
      <div className='headings'>Top Three Cryptocurrencies</div>
      <div className='coinList' width={width}>
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
      <div className='newsArticle'>
        {latestArticles.map((article, i) => {
          if (articleCounter++ < 16) {
            if (article.headline[0] === ':') {
              let tempHeadline = article.headline.slice(2, article.headline.length);
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
          else {
            return (null)
          }
        })}
      </div>

      <ButtonBackToTop />
    </div>
  );
}

export default Home;