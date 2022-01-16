import React from "react";
import { Drawer, ListItem, List, ListItemText } from "@mui/material";
import "./sideNav.css";
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';

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
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <header className='websiteTitle' style={{ fontSize: '32px', paddingTop: '2%', paddingBottom: '2%' }}>Link Finance</header>
                <Divider />
                <List>
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
