import React from 'react';
import { Drawer, ListItem, List, ListItemText } from '@mui/material';
import Styled from 'styled-components';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import './sideNav.css';
import Logo from '../../Images/logo.png';

const drawerWidth = 240;

function SideNav() {

    return (
        <div>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#3D3176',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <center><img className="logo" src={Logo}></img></center>
                
                <Divider />

                <List className="sideNavList" style={{ color: 'white' }}>
                    <ListItem button key={'Home'}>
                        <ListItemIcon>
                            <HomeIcon style={{ color: 'blue' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>

                    <ListItem button key={'Crypto Currency'}>
                        <ListItemIcon>
                            <PaidIcon style={{ color: 'orange' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Crypto Currency'} />
                    </ListItem>

                    <ListItem button key={'Stocks'}>
                        <ListItemIcon>
                            <CandlestickChartOutlinedIcon style={{ color: 'green' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Stocks'} />
                    </ListItem>

                    <ListItem button key={'About Us'}>
                        <ListItemIcon>
                            <InfoIcon style={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary={'About Us'} />
                    </ListItem>
                </List>

            </Drawer>
        </div>
    );
}

export default SideNav;
