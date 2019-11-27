import {Box, Hidden } from "@material-ui/core";
import AboutCard from "./AboutCard";
import HighlightsBar from "./HighlightsBar";
import React from "react";


const Sidebar = () => {
  return (
    <Box pr="4vw">
      <AboutCard/>

      <Hidden mdDown>
        <HighlightsBar/>
      </Hidden>
    </Box>
  )
};

export default Sidebar
