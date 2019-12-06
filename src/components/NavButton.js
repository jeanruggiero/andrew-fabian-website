import React from 'react';
import {Box, Icon, Typography, Fab } from "@material-ui/core";
import { grey } from "@material-ui/core/colors"

export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};


    // this.handleHover = this.handleHover.bind()
  }

  render() {
    let color, style;
    if (this.props.active) {

      color = grey[800];
      style = {
        background: color,
        color: 'white',
      };

    } else {
      color = "secondary";
      style = {};


    }

    return (

      <Box display="inline-block" width="95px">
          <Box pb={1}
               display="flex"
               justifyContent="center">

            <Fab color="secondary"
                 style={style}
                 aria-label={this.props.text}
                 onClick={this.props.onClick}>
              <Icon>{this.props.icon}</Icon>
            </Fab>

          </Box>

          <Box display="flex"
               justifyContent="center">
            <Typography variant='button' color={color} display="block">
              {this.props.text}
            </Typography>
          </Box>
      </Box>
    );
  }
}


