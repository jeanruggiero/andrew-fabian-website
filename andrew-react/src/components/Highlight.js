import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";

const Highlight = (props) => {
  return (
    <Card className="highlight" squared="true">
      <CardMedia
        image= {require('../images/' + props.image_file)}
        title="Robo-AI Exchange" />

      <CardContent>
        <Typography variant="h5">
          {props.headline}
        </Typography>

        <Typography variant="body2">
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default Highlight