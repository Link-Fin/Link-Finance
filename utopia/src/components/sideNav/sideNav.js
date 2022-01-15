import React from "react";
import { Drawer, ListItem, List, ListItemText } from "@mui/material";
import "./sideNav.css";
import Divider from '@mui/material/Divider';
import { Toolbar } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import orange from "@material-ui/core/colors/orange";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import black from "@material-ui/core/colors/common";

const drawerWidth = 240;

function SideNav() {
    return (
        <>
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
                <header className='websiteTitle'>Ütopia</header>
                <Divider />
                <List>
                    <ListItem button key={'Home'}>
                        <ListItemIcon>
                            <HomeIcon style={{color: 'blue'}} />
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <ListItem button key={'Crypto Currency'}>
                        <ListItemIcon>
                            <PaidIcon style={{color: 'orange'}} />
                        </ListItemIcon>
                        <ListItemText primary={'Crypto Currency'} />
                    </ListItem>
                    <ListItem button key={'Stocks'}>
                        <ListItemIcon>
                            <CandlestickChartOutlinedIcon style={{color: 'green'}} />
                        </ListItemIcon>
                        <ListItemText primary={'Stocks'} />
                    </ListItem>
                    <ListItem button key={'About Us'}>
                        <ListItemIcon>
                            <InfoIcon style={{color: 'black'}} />
                        </ListItemIcon>
                        <ListItemText primary={'About Us'} />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default SideNav;
