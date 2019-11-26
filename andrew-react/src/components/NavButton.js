import React from 'react';
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
// import { sizing } from '@material-ui/system';
// import PersonIcon from "@material-ui/icons/Person";
import Icon from "@material-ui/core/Icon";
import { Grid, Box, Container } from "@material-ui/core";
import { spacing } from "@material-ui/system"



export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
    // this.handleHover = this.handleHover.bind()
  }

  // handleHover() {
  //   this.setState({hover: })
  // }

  render() {
    return (
      <Container display="flex" alignItems="center"
               justifyContent="center">
          <Box pb={1}
               display="flex"
               alignItems="center"
               justifyContent="center">

            <Fab color="secondary"
                 aria-label={this.props.text}
                 onClick={this.props.onClick}>
              <Icon size="large">{this.props.icon}</Icon>
            </Fab>
          </Box>

          <Box display="flex"
               alignItems="center"
               justifyContent="center">
            <Typography variant='button' color='secondary' display="block">
              {this.props.text}
            </Typography>
          </Box>
      </Container>
    );
  }
}


