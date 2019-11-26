import NavButton from "./NavButton";
import { spacing } from '@material-ui/system';
import React from "react";
import {Container, Box } from "@material-ui/core";

const NavBar = (props) => {

  console.log(props)
  return (
    <Box className="nav-bar" pb={1} display="flex">
      <NavButton text='About'
                 icon="person"
                 onClick={() => props.onClick('about')}/>

      <NavButton text='Resume'
                 icon="format_align_left"
                 onClick={() => props.onClick('resume')}/>

      {/*<NavButton text='Projects'*/}
      {/*           icon="file_copy"*/}
      {/*           onClick={() => props.onClick('projects')}/>*/}

      <NavButton text='Contact'
                 icon="email"
                 onClick={() => props.onClick('contact')}/>
    </Box>
  )
};

export default NavBar