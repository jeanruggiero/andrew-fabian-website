import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const Highlight = (props) => {
  return (
    <Card className="highlight" square="true">
      <img src={require('../images/' + props.image_file)}
           alt={props.image_alt} />
      <div className="highlight-text">
        <Typography variant="h5">
          {props.headline}
        </Typography>

        <Typography variant="body2">
          {props.body}
        </Typography>
      </div>
    </Card>
  )
};

export default Highlight