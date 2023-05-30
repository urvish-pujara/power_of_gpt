import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* App Icon and Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/path/to/app-icon.png" alt="App Icon" height={24} style={{ marginRight: 8 }} />
          App Name
        </Typography>

        {/* User Profile Image */}
        <Avatar alt="User Profile" src="/path/to/user-profile-image.png" />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
