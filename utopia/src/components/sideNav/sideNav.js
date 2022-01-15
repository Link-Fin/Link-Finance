import React from "react";
import { Drawer, ListItem, List, ListItemText} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import "./sideNav.css";

function SideNav() {
    const options = ['Home', 'Crypto Currency', 'Stocks', 'About Us'];

    return (
        <>
            <header className='websiteTitle'>Ütopia</header>
            {/* <List className='homePageList'>
                {options.map((option, index) => (
                    <ListItemText>{option[index]}</ListItemText>
                ))}
            </List> */}
        </>
    );
}

export default SideNav;
