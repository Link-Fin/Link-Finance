import React from 'react';
import { CardContent, CardMedia, Typography, Card } from '@mui/material';
import './coin.css';

// Create the card which will hold the coin information such as the chart, the current price and the all time high
const coin = ({ name, image, currentPrice, allTimeHigh }) => {
    let coinInfoURL = 'https://coinmarketcap.com/currencies/';
    coinInfoURL = coinInfoURL.concat(name);

    return (
        <a href={coinInfoURL} target='_blank' rel="noopener noreferrer" className='usableBackground'>
            <Card className="coinCards" sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="100sx"
                    image={image}
                    alt="Crypto"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">Current Price: ${currentPrice}</Typography>
                    <Typography variant="body2" color="text.secondary">All Time High: ${allTimeHigh}</Typography>
                </CardContent>
            </Card>
        </a>
    )
}

export default coin