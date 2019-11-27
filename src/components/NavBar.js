import React from "react";
import { Box, Grid } from "@material-ui/core";
import NavButton from "./NavButton";

const NavBar = (props) => {

  return (
    <Box pb={1}>
      <Grid container>

        <Grid item xs>
          <Box display="flex" justifyContent="center">
            <NavButton text='About'
                       icon="person"
                       onClick={() => props.onClick('about')}/>
          </Box>
        </Grid>


        <Grid item xs>
          <Box display="flex" justifyContent="center">
            <NavButton text='Resume'
                       icon="format_align_left"
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
                       onClick={() => props.onClick('contact')}/>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
};

export default NavBar