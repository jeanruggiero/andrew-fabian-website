import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
// import { sizing } from '@material-ui/system';

function HeaderBar(props) {
  return(
    <AppBar height={600} position='static' className="app-bar">
      <Typography variant="h6" >Andrew Fabian</Typography>
    </AppBar>
  );
}

export default HeaderBar;