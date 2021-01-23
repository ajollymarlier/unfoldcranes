/* eslint-disable no-restricted-globals */
import '../styles/CraneMenu.css'

import { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';

const CraneMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleFilterClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
      const handleClose = () => {
        setAnchorEl(null);
    };

    //! Popup filter menu not working rn
    return(
        <div id="craneMenu">
            <Button id="countryFilterButton" aria-controls="simple-menu" aria-haspopup="true" onClick={handleFilterClick}>
                Filter By Country
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

            <Button onClick={() => {
                //TODO change to non-reload retrieval to facilitate country filter
                location.reload()
            }}>
                Get New Cranes
            </Button>
        </div>
    )
}

export default CraneMenu