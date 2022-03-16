import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardContent, Typography, Card } from '@mui/material';
import './coin.css';

// Create the card which will hold the coin information such as the chart, the current price and the all time high
function Coin({ name, currentPrice, allTimeHigh }) {
    const [coinPricesAPI, setCoinPricesAPI] = useState([]);

    let coinInfoURL = 'https://coinmarketcap.com/currencies/';
    coinInfoURL = coinInfoURL.concat(name);
    var coinPrices = [];
    var index = 0;
    var numPoints = [];

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/' + name.toLowerCase() + '/market_chart?vs_currency=cad&days=1')
            .then(res => {
                setCoinPricesAPI(res.data.prices);
            }).catch(error => alert(error))
    }, [name]);

    coinPricesAPI.forEach(singlePrice => {
        coinPrices[index] = singlePrice[1];
        numPoints[index] = index++;
    });

    function loadChart() {
        const Chart = require('chart.js');
        const ctx = name + 'chart';

        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: numPoints,
                datasets: [{
                    label: '24 Hour Price',
                    data: coinPrices,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 255, 255, 1)',
                    ],
                    borderWidth: 1,
                    fill: false,
                }],
                options: {
                    scales: {
                        y: {
                            type: 'linear',
                            grace: '5%'
                        },
                        x: {
                            ticks: {
                                display: false
                            }
                        }
                    }
                },
            },
        });

        index = 0;
    }

    return (
        <a href={coinInfoURL} target='_blank' rel="noopener noreferrer" className='usableBackground'>
            <canvas id={name + 'chart'} width="300" height="200" onLoad={loadChart()}></canvas>
            <Card className="coinCards" sx={{ maxWidth: 300 }}>
                <CardContent sx={{ backgroundColor: '#253344' }}>
                    <Typography gutterBottom variant="h5" sx={{ color: 'white' }} component="div">{name}</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>Current Price: ${currentPrice}</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>All Time High: ${allTimeHigh}</Typography>
                </CardContent>
            </Card>
        </a>
    )
}

export default Coin
