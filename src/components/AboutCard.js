import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@material-ui/core";

const AboutCard = () => {
  return (
    <Card elevation={1}>
      <CardMedia
        component="img"
        image={require("../images/fabian_headshot_rect.jpg")}
        title="Andrew Fabian" />

      <CardContent className="about-card-text">
        <Box pb={1.5}>
          <Typography variant="h4">
            Andrew Fabian
          </Typography>

          <Typography variant="h6">
            MIT Leaders for Global Operations Fellow
          </Typography>
        </Box>

        <Typography variant="body2">
          Andrew is a graduate student and mechanical engineer at Boeing. He is currently on sabbatical while pursuing degrees in engineering and business in the MIT Leaders for Global Operations Program.
        </Typography>
      </CardContent>
    </Card>
  )
};

export default AboutCard