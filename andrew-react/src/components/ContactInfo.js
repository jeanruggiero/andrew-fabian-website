import React from "react";
import { Box, Icon, Typography, Link } from "@material-ui/core";

const ContactInfo = (props) => {
  if (props.href) {
    return (
    <Link href={props.href} color="textPrimary">
      <Box display="flex" pb={1}>
        <Box pr={1} my="auto">
          <Icon>{props.icon}</Icon>
        </Box>

        <Box contentAlign="middle" my="auto">
          <Typography variant="h6">
            {props.address}
          </Typography>
        </Box>
      </Box>
    </Link>
  )
  } else {
    return (
      <Box display="flex" pb={1}>
        <Box pr={1} my="auto">
          <Icon>{props.icon}</Icon>
        </Box>

        <Box contentAlign="middle" my="auto">
          <Typography variant="h6">
            {props.address}
          </Typography>
        </Box>
      </Box>
    )
  }
};

export default ContactInfo