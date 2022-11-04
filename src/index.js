import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/homePage/Home';
import AboutUs from './pages/aboutUsPage/AboutUs'
import Stocks from './pages/stocksPage/StocksPage';
import Crypto from './pages/cryptoPage/CryptoPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stocks" component={Stocks} />
          <Route exact path="/crypto" component={Crypto} />
          <Route exact path="/about" component={AboutUs} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);