import NavButton from "./NavButton";
import React from "react";

const NavBar = () => {

  return (
    <div className="nav-bar">
      <NavButton text='About' icon="person"/>
      <NavButton text='Resume' icon="format_align_left"/>
      <NavButton text='Projects' icon="file_copy"/>
      <NavButton text='Contact' icon="email"/>
    </div>
  )
};

export default NavBar