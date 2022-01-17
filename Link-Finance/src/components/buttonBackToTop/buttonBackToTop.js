import React, { useState, useEffect } from 'react'
import './buttonBackToTop.css';
import Button from '@mui/material/Button';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

const BackToTopButton = () => {
    const [isVisible, setVisible] = useState(false)

    // setVisible if else statement to determine if the user is down far enough in the page where a button to get to the top would be necessary
    const checkLocation = () => {
        if (window.pageYOffset > 250) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }

    // Function the button will perform upon click
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    // Used to listen for scroll events by the user and using checkLocation to determine if it passes the threshold for displaying the back to top button
    useEffect(() => {
        window.addEventListener('scroll', checkLocation);
        return () => {
            window.removeEventListener('scroll', checkLocation);
        }
    }, [])

    // Ternary operator used to determine whether the button should be displayed on the screen or not depending on the user's location on the page
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
