import React from 'react';
import {Toolbar, AppBar, Typography } from "@material-ui/core";


function HeaderBar() {
  return(
    <AppBar position='static' className="app-bar">
      <Toolbar>
        <Typography variant="h1">
          Andrew Fabian
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;