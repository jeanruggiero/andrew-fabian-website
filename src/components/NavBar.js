import React from "react";
import { Box } from "@material-ui/core";
import NavButton from "./NavButton";

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