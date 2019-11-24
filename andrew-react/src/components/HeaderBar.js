import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { sizing } from '@material-ui/system';

const HeaderBar = () => {
  return(
    <AppBar height={600}>
      <Typography>Andrew Fabian</Typography>
    </AppBar>
  )
};

export default HeaderBar;