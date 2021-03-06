import React from "react";
import {Typography, Box, Divider, Grid } from "@material-ui/core";
import Highlight from "./Highlight";

const HighlightsBar = () => {
  return (
    <Box py={3}>
      <Box pl={1} pb={0.5}>
        <Typography variant="overline">
          Highlights
        </Typography>
      </Box>

      <Box pb={1}>
        <Divider />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={12}>
          <Highlight headline="Robo-AI Exchange"
                     body="Andrew serves on the board of the MIT Robo-AI Exchange Conference. Register here!"
                     link="https://robo-ai.org/"
                     image_file="robo_ai.svg"
                     image_alt="Robo-AI Exchange Icon"/>
        </Grid>

        <Grid  item xs={12} md={6} lg={12}>
          <Highlight headline="Leaders for Global Operations"
                     body="Learn more about the MIT LGO program."
                     link="https://lgo.mit.edu/"
                     image_file="lgo_logo.svg"
                     image_alt="MIT LGO Logo"/>
        </Grid>
      </Grid>


    </Box>
  )
};

export default HighlightsBar