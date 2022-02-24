import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/homePage/Home';
import AboutUs from './components/pages/aboutUsPage/AboutUs'
import Stocks from './components/pages/stocksPage/StocksPage';
import Crypto from './components/pages/cryptoPage/CryptoPage';
import SideNav from './components/sideNav/sideNav';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <SideNav />
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