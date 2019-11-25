import NavButton from "./NavButton";
import React from "react";

const NavBar = (props) => {

  console.log(props)
  return (
    <div className="nav-bar">
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
    </div>
  )
};

export default NavBar