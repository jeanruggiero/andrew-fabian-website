import React from "react";
import {Box, Card, CardContent, CardMedia, Typography, Link } from "@material-ui/core";

const Highlight = (props) => {
  return (
    <Box pb={1.5} className="highlight">
      <Link href={props.link}>
        <Card style={{height: 100}} elevation={3}>
          <CardMedia
            style={{
              height: 100,
              width: 100,
              display: 'inline-block',
              objectFit: 'cover'
              }}
            component="img"
            image= {require('../images/' + props.image_file)}
            title="Robo-AI Exchange" />


          <CardContent style={{
                          display: "inline-block",
                          width: "55vw",
                          verticalAlign: 'top',
                          paddingBottom: 0
                          }}>
            <Typography variant="h5">
              {props.headline}
            </Typography>

            <Typography variant="body2">
              {props.body}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  )
};

export default Highlight