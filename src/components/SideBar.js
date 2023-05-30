import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'All Transactions', icon: <ListAltIcon />, path: '/transactions' },
    { text: 'Tip Management', icon: <PaymentIcon />, path: '/tip-management' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'User Management', icon: <PeopleIcon />, path: '/user-management' },
  ];

  return (
    <Drawer variant="permanent" style={{
    width: '240px',
    height: '85vh'}}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
