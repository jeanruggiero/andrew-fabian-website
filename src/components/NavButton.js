import React from 'react';
import { Box, Icon, Typography, Fab } from "@material-ui/core";

export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
    // this.handleHover = this.handleHover.bind()
  }

  render() {
    return (
      <Box display="inline-block" width="95px">
          <Box pb={1}
               display="flex"
               justifyContent="center">

            <Fab color="secondary"
                 aria-label={this.props.text}
                 onClick={this.props.onClick}>
              <Icon>{this.props.icon}</Icon>
            </Fab>
          </Box>

          <Box display="flex"
               justifyContent="center">
            <Typography variant='button' color='secondary' display="block">
              {this.props.text}
            </Typography>
          </Box>
      </Box>
    );
  }
}


