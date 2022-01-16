import React from 'react'
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

const ButtonRefresh = () => {

    return (
        <Button startIcon={<RefreshIcon />} style={{ position: 'fixed', top: '0px', left: '240px', }} />
    )
}

export default ButtonRefresh
