import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
