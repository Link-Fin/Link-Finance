import React, {useState, useEffect} from 'react'
import './buttonBackToTop.css';
import Button from '@mui/material/Button';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

const BackToTopButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  
        })
    }

    return (
            <Button startIcon={<ArrowCircleUpRoundedIcon />} style={{position: 'fixed', bottom: '0px', right: '0px'}} onClick={scrollToTop}/>
    )
}

export default BackToTopButton
