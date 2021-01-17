import React from "react";
import {Box, Hidden, Typography } from "@material-ui/core";
import AboutCard from "./AboutCard";

const ContentAbout = () => {
  // const theme = useTheme();
  // const large = useMediaQuery(theme.breakpoints.up('sm'));
  // const aboutCard = large ? "" : <AboutCard class="small"/>;

  return (
    <Box pb={2}>

      <Hidden smUp>
        <AboutCard class="small"/>
      </Hidden>

      <Box pt={5}>
        <Box pb={2}>
          <Typography variant="h2">
            About Andrew
          </Typography>
        </Box>

        <Typography variant="body1" paragraph>
          Andrew is a mechanical engineer at Boeing and a graduate student in the MIT Leaders for Global Operations Program. He is currently pursuing masters degrees in mechanical engineering (MS) and business administration (MBA). His academic interests include operations management, systems thinking, and organizational processes. He is currently working on his thesis, which explores the integration of additive manufacturing processes within established manufacturing companies. He is active in the LGO Director’s Advisory Committee and Partner Relations Committee. He also serves on the board of the MIT Robo-AI Exchange conference.
        </Typography>

        <Typography variant="body1" paragraph>
          Andrew has held several roles in the Propulsion Systems Division at Boeing. His most recent role was Lead Engineer in Propulsion Safety and Airworthiness. Previously, he was an Operations Manager on the 737 flightline. He has participated in several leadership development programs, including the Propulsion Leadership Dimensions Program.
        </Typography>

        <Typography variant="body1" paragraph>
          Outside of work, Andrew volunteers as a climbing instructor and curriculum advisor for the Boeing Employees Alpine Society (BOEALPS). The goal of BOEALPS is to promote safety in the climbing community through education, community events, and charitable giving. Andrew has taught climbers of all levels and continues to advise on the curriculum of the club’s three climbing courses.
        </Typography>

        <Typography variant="body1" paragraph>
          Andrew’s hobbies include rock and ice climbing, mountaineering, and backcountry skiing. He is an avid runner and has qualified for the Boston Marathon twice. He also spins fire and participates in MIT’s fire arts club.
        </Typography>
      </Box>
    </Box>
  )
};

export default ContentAbout