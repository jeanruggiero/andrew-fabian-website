import React from "react";
import Divider from "@material-ui/core/Divider";
import Highlight from "./Highlight";
import {Typography} from "@material-ui/core";


const HighlightsBar = () => {
  return (
    <div className="highlights-bar">
      <Typography variant="overline">
        Highlights
      </Typography>

      <Divider />

      <Highlight headline="Robo-AI Exchange"
        body="Andrew serves on the board of the MIT Robo-AI Exchange Conference. Register here!"
        image_file="robo_ai.svg"
        image_alt="Robo-AI Exchange Icon"/>

      <Highlight headline="Leaders for Global Operations"
        body="Learn more about the MIT LGO program."
        image_file="lgo_logo.svg"
        image_alt="MIT LGO Logo"/>


    </div>
  )
};

export default HighlightsBar