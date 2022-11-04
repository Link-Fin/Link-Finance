import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardContent, Typography, Card } from '@mui/material';
import './coin.css';

// Create the card which will hold the coin information such as the chart, the current price and the all time high
function Coin({ name, currentPrice, allTimeHigh }) {
    const [width, setWindowWidth] = useState(0);
    const [coinPricesAPI, setCoinPricesAPI] = useState([]);

    let coinInfoURL = 'https://coinmarketcap.com/currencies/';
    coinInfoURL = coinInfoURL.concat(name.toLowerCase());
    var coinPrices = [];
    var index = 0;
    var numPoints = [];

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

        // eslint-disable-next-line
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: numPoints,
                datasets: [{
                    label: '24 Hour Price',
                    data: coinPrices,
                    backgroundColor: [
                        'rgba(255, 255, 255, 1)',
                    ],
                    borderColor: [
                        'rgba(255, 255, 255, 1)',
                    ],
                    borderWidth: 1,
                    fill: false,
                }],
            },
        });
    }

    index = 0;

    return (
        <div className='usableBackground' width={width}>

            <button>1 Day</button>
            <button>3 Days</button>
            <button>1 Week</button>
            <button>1 Month</button>
            <button>1 Year</button>

            <canvas id={name + 'chart'} width="3rem" height="2rem" onLoad={loadChart()}></canvas>
            <a className='coinRedirection' href={coinInfoURL} target='_blank' rel="noopener noreferrer">
                <Card className="coinCards" sx={{ maxWidth: width }}>
                    <CardContent sx={{ backgroundColor: '#253344' }}>
                        <Typography gutterBottom variant="h5" sx={{ color: 'white' }} component="div">{name}</Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>Current Price: ${currentPrice}</Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>All Time High: ${allTimeHigh}</Typography>
                    </CardContent>
                </Card>
            </a>
        </div>
    )
}

export default Coin
