import React from "react";
import { Typography, Box } from "@material-ui/core";
import ContactInfo from "./ContactInfo";

const ContentContact = () => {
  return (
    <Box>
      <Box pt={3} pb={2}>
        <Typography variant="h2">
          Contact Information
        </Typography>
      </Box>

      <Box px={1}>
        <ContactInfo icon="email"
                     address="asfabian@mit.edu"
                     href="mailto:asfabian@mit.edu"/>

        <ContactInfo icon="call"
                     address="408-506-5444"
                     href="tel:408-506-5444"/>

        <ContactInfo icon="place" address="Cambridge, MA"/>

        <ContactInfo icon="account_circle"
                     address="linkedin.com/in/andrewsfabian"
                     href="https://linkedin.com/in/andrewsfabian"/>
      </Box>

    </Box>
  )
};

export default ContentContact