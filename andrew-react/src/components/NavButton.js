import React from 'react';
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
// import { sizing } from '@material-ui/system';
// import PersonIcon from "@material-ui/icons/Person";
import Icon from "@material-ui/core/Icon";



function NavButton(props) {

  return(
      <div className="nav-button">
        <Fab color="secondary" aria-label={props.text} className="nav-button">
          <Icon size="large">{props.icon}</Icon>
        </Fab>

        <Typography variant='button' color='secondary' display="block">
          {props.text}
        </Typography>
      </div>
  );
}

export default NavButton;
