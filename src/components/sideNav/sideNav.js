import React from 'react';
import { Drawer, ListItem, List, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import './sideNav.css';
import Logo from '../../Images/logo.png';
import ButtonRefresh from '../../components/buttonRefresh/buttonRefresh';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Home from '../pages/homePage/Home.js';
import AboutUs from '../pages/aboutUsPage/AboutUs.js';
import CryptoPage from '../pages/cryptoPage/CryptoPage.js';
import StocksPage from '../pages/stocksPage/StocksPage.js';

const drawerWidth = 240;

function SideNav() {

    let history = useHistory();

    return (
        <Router>
            <Switch>
                <Route exact path='../pages/Home' element={<Home />}></Route>
                <Route exact path='../pages/AboutUs' element={<AboutUs />}></Route>
                <Route exact path='../pages/CryptoPage' element={<CryptoPage />}></Route>
                <Route exact path='../pages/StocksPage' element={<StocksPage />}></Route>
            </Switch>

            <div>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#181A20',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <center><img className="logo" src={Logo} z-index='1' alt="Unable to load"></img></center>

                    <Divider />

                    <List className="sideNavList" style={{ color: 'white' }}>
                        <Link className='links' to='/' onClick={() => history.push('/')}>
                            <ListItem button key={'Home'}>
                                <ListItemIcon>
                                    <HomeIcon style={{ color: 'white', fontSize: '2.5rem' }} />
                                </ListItemIcon>
                                <ListItemText sx={{ fontSize: '2.5rem' }} primary={'Home'} />
                            </ListItem>
                        </Link>

                        <Link className='links' to='/crypto' onClick={() => history.push('/crypto')}>
                            <ListItem button key={'Crypto Currency'}>
                                <ListItemIcon>
                                    <PaidIcon style={{ color: 'orange', fontSize: '2.5rem' }} />
                                </ListItemIcon>
                                <ListItemText type='body2' primary={'Crypto Currency'} />
                            </ListItem>
                        </Link>

                        <Link className='links' to='/stocks' onClick={() => history.push('/stocks')}>
                            <ListItem button key={'Stocks'}>
                                <ListItemIcon>
                                    <CandlestickChartOutlinedIcon style={{ color: 'lightGreen', fontSize: '2.5rem' }} />
                                </ListItemIcon>
                                <ListItemText primary={'Stocks'} />
                            </ListItem>
                        </Link>

                        <Link className='links' to='/about' onClick={() => history.push('/about')}>
                            <ListItem button key={'About Us'} >
                                <ListItemIcon>
                                    <InfoIcon style={{ color: '607d8b', fontSize: '2.5rem' }} />
                                </ListItemIcon>
                                <ListItemText primary={'About Us'} />
                            </ListItem>
                        </Link>

                        <ListItem key={'Refresh'}>
                            <ButtonRefresh />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </Router>
    );
}

export default SideNav;
