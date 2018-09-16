import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const TopBar = () => (
  <AppBar style={{ flexGrow: '1' }} position="static">
    <Toolbar>
      <Typography style={{ flexGrow: '1' }} variant="title" color="inherit">
        Gordices for business
      </Typography>
      <Button color="inherit" variant="outlined">
        Login
      </Button>
    </Toolbar>
  </AppBar>
);

export default TopBar;
