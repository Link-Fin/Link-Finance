import React, { useState, useEffect } from 'react'
import './buttonBackToTop.css';
import Button from '@mui/material/Button';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

const BackToTopButton = () => {
    const [isVisible, setVisible] = useState(false)

    const checkLocation = () => {
        if (window.pageYOffset > 200) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', checkLocation);
        return () => {
            window.removeEventListener('scroll', checkLocation);
        }
    }, [])

    return (
        <div className='backToTopButton'>
            {
                isVisible 
                ? <Button startIcon={<ArrowCircleUpTwoToneIcon style={{ fontSize: '64px' }} />} style={{ position: 'fixed', bottom: '0px', right: '0px', opacity: '100' }} onClick={scrollToTop} />
                : <Button startIcon={<ArrowCircleUpTwoToneIcon style={{ fontSize: '64px' }} />} style={{ position: 'fixed', bottom: '0px', right: '0px', opacity: '0' }} onClick={scrollToTop} />
            }
        </div>
    )
}

export default BackToTopButton
