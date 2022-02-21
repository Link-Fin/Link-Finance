import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardContent, CardMedia, Typography, Card } from '@mui/material';
import './coin.css';

// Create the card which will hold the coin information such as the chart, the current price and the all time high
function Coin({ name, image, currentPrice, allTimeHigh }) {
    let coinInfoURL = 'https://coinmarketcap.com/currencies/';
    coinInfoURL = coinInfoURL.concat(name);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/' + name.toLowerCase() + '/market_chart?vs_currency=cad&days=1')
            .then(res => {
                console.log(res.data);
            }).catch(error => alert(error))
    }, []);

    return (
        <a href={coinInfoURL} target='_blank' rel="noopener noreferrer" className='usableBackground'>
            <Card className="coinCards" sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="100sx"
                    image={image}
                    alt="Crypto"
                />
                <CardContent sx={{ backgroundColor: '#253344' }}>
                    <Typography gutterBottom variant="h5" sx={{ color: 'white' }} component="div">{name}</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }} >Current Price: ${currentPrice}</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }} >All Time High: ${allTimeHigh}</Typography>
                </CardContent>
            </Card>
        </a>
    )
}

export default Coin
