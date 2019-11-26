import React from "react";
import {Box, Typography, Link } from "@material-ui/core";

const Footer = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Typography variant="body2">
        Site created & designed by&nbsp;
        <Link href="http://jeanmruggiero.com/" color="primary.dark" style={{fontWeight: 500}}>
          Jean Ruggiero
        </Link>
         &nbsp;&ndash; 2019
      </Typography>
    </Box>
  )
};

export default Footer