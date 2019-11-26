import React from 'react';
import {Toolbar, AppBar, Typography, Box} from "@material-ui/core";


function HeaderBar() {
  return(
    <AppBar position='static' className="app-bar">
      <Toolbar>
        <Box pt={2}>
          <Typography variant="h1">
            Andrew Fabian
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;