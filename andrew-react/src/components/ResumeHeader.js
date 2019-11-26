import React from "react";
import { Box, Typography } from "@material-ui/core";


const ResumeHeader = (props) => {
  return (
    <Box pt={3} pb={2}>
      <Typography variant="h2">
        {props.children}
      </Typography>
    </Box>
  )
};

export default ResumeHeader