import React from "react";
import {Box, Typography, Link } from "@material-ui/core";

const Footer = () => {
  return (
    <Box display="flex" justifyContent="center" pb={2} pt={4}>
      <Typography variant="body2">
        Site created & designed by&nbsp;
        <Link href="http://jeanmruggiero.com/" color="textPrimary" style={{fontWeight: 500}}>
          Jean Ruggiero
        </Link>
         &nbsp;&ndash; 2019
      </Typography>
    </Box>
  )
};

export default Footer