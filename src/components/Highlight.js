import React from "react";
import {Box, Card, CardContent, CardMedia, Typography, Link } from "@material-ui/core";

const Highlight = (props) => {
  return (
    <Box pb={0} className="highlight" width="100%">
      <Link href={props.link}>
        <Card style={{height: 100}} elevation={3}>
          <CardMedia
            style={{
              height: 100,
              width: 100,
              display: 'inline-block',
              }}
            component="img"
            image= {require('../images/' + props.image_file)}
            title="Robo-AI Exchange" />


          <CardContent style={{
                          display: "inline-block",
                          width: "60%",
                          verticalAlign: 'top',
                          padding: '8px'
                          }}>
            <Box pb={0.5}>
              <Typography variant="h5">
                {props.headline}
              </Typography>
            </Box>

            <Typography variant="body2" style={{lineHeight: 1.2}}>
              {props.body}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  )
};

export default Highlight