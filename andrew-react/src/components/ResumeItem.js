import React from "react";
import Typography from "@material-ui/core/Typography";


const ResumeItem = (props) => {
  let gpa;

  if (props.gpa) {
    gpa = (<Typography variant="body1">
            {props.gpa}
          </Typography>)
  }

  return (
    <div className="resume-item">
      <Typography variant="overline">
        {props.company}
      </Typography>

      <Typography variant="h3">
        {props.title}
      </Typography>

      <div className="resume-date">
        <Typography variant="body1">
          {props.date}
        </Typography>

        {gpa}
      </div>

      <Typography variant="body1">
        {props.children}
      </Typography>
    </div>
  )
};

export default ResumeItem