import React from 'react';
import Typography from '@mui/material/Typography';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '16px',
    // bg color blue
    backgroundColor: '#e6f0ff',
  },
  appName: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  screenName: {
    color: '#666',
    fontWeight: 'lighter',
    fontSize: '1rem',
  },
};

const PageHeader = ({ screenName }) => {
  return (
    <div style={styles.root}>
      <Typography variant="h2" style={styles.appName}>
        OTR Sunnyvale
      </Typography>
      <Typography variant="body2" style={styles.screenName}>
        {screenName}
      </Typography>
    </div>
  );
};

export default PageHeader;
