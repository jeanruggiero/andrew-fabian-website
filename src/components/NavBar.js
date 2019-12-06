import React from "react";
import { Box, Grid } from "@material-ui/core";
import NavButton from "./NavButton";

const NavBar = (props) => {

  let aboutActive = (props.panel === "about");
  let resumeActive = (props.panel === "resume");
  let contactActive = (props.panel === "contact");

  return (

    <Box pb={1}>
      <Grid container>

        <Grid item xs>
          <Box display="flex" justifyContent="center">
            <NavButton text='About'
                       icon="person"
                       active={aboutActive}
                       onClick={() => props.onClick('about')}/>
          </Box>
        </Grid>


        <Grid item xs>
          <Box display="flex" justifyContent="center">
            <NavButton text='Resume'
                       icon="format_align_left"
                       active={resumeActive}
                       onClick={() => props.onClick('resume')}/>
          </Box>
        </Grid>


        {/*<NavButton text='Projects'*/}
        {/*           icon="file_copy"*/}
        {/*           onClick={() => props.onClick('projects')}/>*/}


        <Grid item xs>
          <Box display="flex" justifyContent="center">
            <NavButton text='Contact'
                       icon="email"
                       active={contactActive}
                       onClick={() => props.onClick('contact')}/>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
};

export default NavBar