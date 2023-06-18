import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './navbar.css';
import BUTTON from '../button/button';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" className="nav-container">
      <Toolbar className="navbar">
        <Typography className="logo">{'</>'}</Typography>
        <div className="nav-content">
          <Typography variant="body1" sx={{ mr: 2 }}>
            Home
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }}>
            About
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }}>
            Skills
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }}>
            Portfolio
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }}>
            Contact
          </Typography>
        </div>
        <div className="button">
          <BUTTON />
        </div>
        <MenuRoundedIcon className="menu-icon" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
