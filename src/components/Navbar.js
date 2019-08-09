import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  topBar: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.topBar}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">home</Button>
          <Button color="inherit">favorite</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
