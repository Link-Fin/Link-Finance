import React from 'react'
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

const ButtonRefresh = () => {

    // Function the button will perform upon click
    const windowRefresh = () => {
        window.location.reload(false);
    }

    return (
        <Button className='refreshButton' startIcon={<RefreshIcon style={{ fontSize: '36px', color: 'white' }} />} style={{ position: 'fixed', bottom: '0rem', left: '0rem', }} onClick={windowRefresh} />
    )
}

export default ButtonRefresh
