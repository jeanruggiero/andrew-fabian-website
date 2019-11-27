import React from "react";
import {Box, Typography, Grid, Hidden} from "@material-ui/core";

const ResumeItem = (props) => {
  let schoolCol = props.gpa? 10 : 12;

  let gpasm;
  let gpalg;

  if (props.gpa) {
    gpasm = (
      <Box display="inline-block" pl="30px">
        <Typography variant="body1" style={{textAlign: "right"}}>
          {props.gpa}
        </Typography>
      </Box>)

    gpalg = (
      <Hidden mdDown>
        <Grid item lg={2}>
          <Box>
            <Typography variant="body1" style={{textAlign: "right"}}>
              {props.gpa}
            </Typography>
          </Box>
        </Grid>
      </Hidden>
    )
  }

  return (
    <Box pb={2}>
      <Box pb={0.8}>
        <Typography variant="overline">
          {props.company}
        </Typography>
      </Box>

      <Box pb={0.2}>
        <Grid container>
          <Grid item xs={12} lg={10}>
            <Typography variant="h3">
              {props.title}
            </Typography>
          </Grid>

          <Hidden mdDown>
            <Grid item lg={2}>
              <Box >
                <Typography variant="body1" color="textPrimary" style={{textAlign: "right"}}>
                  {props.date}
                </Typography>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Box>

      <Hidden lgUp>
        <Box>
          <Box display="inline-block">
            <Typography variant="body1" color="textPrimary">
              {props.date}
            </Typography>
          </Box>

          {gpasm}
        </Box>
      </Hidden>

      <Grid container>
        <Grid item xs={12} lg={schoolCol}>
          <Box pt={0.7}>
            {props.children}
          </Box>
        </Grid>

        {gpalg}
      </Grid>
    </Box>
  )
};

export default ResumeItem