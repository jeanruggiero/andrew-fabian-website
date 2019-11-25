import React from "react";
import AboutCard from "./AboutCard";
import {Typography} from "@material-ui/core";

const ContentAbout = () => {
  return (
    <div className="content">
      <AboutCard/>

      <div className="content-text">
        <Typography variant="h2">
          About Andrew
        </Typography>

        <Typography variant="body1">
          Andrew Fabian is a mechanical engineer at Boeing and a graduate student in the MIT Leaders for Global Operations Program. He is currently pursuing masters degrees in mechanical engineering (MS) and business administration (MBA). His academic interests include operations management, systems thinking, and organizational processes. He is active in the LGO Director’s Advisory Committee and Partner Relations Committee. He also serves on the board of the MIT Robo-AI Exchange conference.
        </Typography>

        <Typography variant="body1">
          Andrew has held several roles in the Propulsion Systems Division at Boeing. His most recent role was Lead Engineer in Propulsion Safety and Airworthiness. Previously, he was an Operations Manager on the 737 flightline. He has participated in several leadership development programs, including the Propulsion Leadership Dimensions Program.
        </Typography>

        <Typography variant="body1">
          Outside of work, Andrew volunteers as a climbing instructor and curriculum advisor for the Boeing Employees Alpine Society (BOEALPS). The goal of BOEALPS is to promote safety in the climbing community through education, community events, and charitable giving. Andrew has taught climbers of all levels and continues to advise on the curriculum of the club’s three climbing courses.
        </Typography>

        <Typography variant="body1">
          Andrew’s hobbies include rock and ice climbing, mountaineering, and backcountry skiing. He is an avid runner and has qualified for the Boston Marathon twice. He also spins fire and participates in MIT’s fire arts club.
        </Typography>
      </div>
    </div>
  )
};

export default ContentAbout