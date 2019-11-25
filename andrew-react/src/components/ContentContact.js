import React from "react";
import {Icon, Typography} from "@material-ui/core";

const ContentContact = () => {
  return (
    <div className="content">
      <Typography variant="h2">
        Contact Information
      </Typography>

      <div className="contact-info">
        <Icon>email</Icon>
        <Typography variant="body1">
          asfabian@mit.edu
        </Typography>
      </div>

      <div className="contact-info">
        <Icon>call</Icon>
        <Typography variant="body1">
          408-506-5444
        </Typography>
      </div>

      <div className="contact-info">
        <Icon>place</Icon>
        <Typography variant="body1">
          Cambridge, MA
        </Typography>
      </div>

      <div className="contact-info">
        <Icon>phone</Icon>
        <a href="www.linkedin.com/in/andrewsfabian">
          <Typography variant="body1">
            linkedin.com/in/andrewsfabian
          </Typography>
        </a>
      </div>


    </div>
  )
};

export default ContentContact