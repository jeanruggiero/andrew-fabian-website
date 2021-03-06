import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@material-ui/core";

const AboutCard = (props) => {
  return (
    <Card elevation={1} className={props.class}>
      <CardMedia
        component="img"
        image={require("../images/fabian_headshot_rect.jpg")}
        title="Andrew Fabian" />

      <CardContent>
        <Box pb={1.5}>
          <Typography variant="h4">
            Andrew Fabian
          </Typography>

          <Typography variant="h6">
            MIT Leaders for Global Operations Fellow
          </Typography>
        </Box>

        <Typography variant="body2">
          Andrew is a graduate student with engineering and manufacturing leadership experience at Boeing. He is currently on sabbatical while pursuing degrees in engineering and business in the MIT Leaders for Global Operations Program.
        </Typography>
      </CardContent>
    </Card>
  )
};

export default AboutCard