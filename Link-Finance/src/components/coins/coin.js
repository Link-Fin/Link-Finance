import React from 'react'
import {CardContent, CardMedia, Typography, Card} from '@mui/material';
import './coin.css';

const coin = ({ name, image, currentPrice, allTimeHigh }) => {
    return (
        <div className='usableBackground'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="Crypto"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">Current Price: ${currentPrice}</Typography>
                    <Typography variant="body2" color="text.secondary">All Time High: ${allTimeHigh}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default coin
