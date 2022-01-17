import React from 'react'
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

const ButtonRefresh = () => {

    const windowRefresh = () => {
        window.location.reload(false);
    }

    return (
        <Button startIcon={<RefreshIcon style={{fontSize: '36px'}}/>} style={{ position: 'fixed', top: '0px', left: '240px', }} onClick={windowRefresh}/>
    )
}

export default ButtonRefresh
