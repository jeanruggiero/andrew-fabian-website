import React from "react";
import ContentAbout from "./ContentAbout";
import ContentResume from "./ContentResume";
import ContentContact from "./ContentContact";

const ContentPanel = (props) => {
  switch (props.panel) {
    case 'about':
      return (<ContentAbout/>);
    case 'resume':
      return (<ContentResume/>);
    case 'contact':
      return (<ContentContact/>);
    default:
      return false;
  }
};

export default ContentPanel