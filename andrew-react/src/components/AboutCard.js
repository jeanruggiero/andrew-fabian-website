import React from "react";
import Card from "@material-ui/core/Card";
import {Typography} from "@material-ui/core";

const AboutCard = () => {
  return (
    <Card className="about-card" boxShadow={0} squared="true">
      <img src={require("../images/fabian_headshot_rect.svg")}
           alt="Professional headshot of Andrew Fabian" />
      <div className="about-card-text">
        <Typography variant="h6">
          Andrew Fabian
        </Typography>
        <Typography variant="body2">
          MIT Leaders for Global Operations Fellow
        </Typography>
        <Typography variant="body2">
          Andrew is a graduate student and mechanical engineer at Boeing. He is currently on sabbatical while pursuing degrees in engineering and business in the MIT Leaders for Global Operations Program.
        </Typography>
      </div>
    </Card>
  )
};

export default AboutCard