import React from 'react';
import { Box, Container, Icon, Typography, Fab } from "@material-ui/core";

export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
    // this.handleHover = this.handleHover.bind()
  }

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


