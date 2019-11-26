import React from "react";
import {Box, Container, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors"


const ResumeItem = (props) => {
  let gpa;

  if (props.gpa) {
    gpa = (
      <Box display="inline-block" pl="30px">
        <Typography variant="body1">
          {props.gpa}
        </Typography>
      </Box>)
  }

  return (
    <Box pb={2}>
      <Box pb={0.8}>
        <Typography variant="overline">
          {props.company}
        </Typography>
      </Box>

      <Box pb={0.2}>
        <Typography variant="h3">
          {props.title}
        </Typography>
      </Box>

      <Box>
        <Box display="inline-block">
          <Typography variant="body1" color="textPrimary">
            {props.date}
          </Typography>
        </Box>

        {gpa}
      </Box>

        {props.children}
    </Box>
  )
};

export default ResumeItem