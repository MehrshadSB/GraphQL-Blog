import React from "react";

import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        padding="10px"
        textAlign="center"
        mt={10}
        color="#32322C">
        پروژه وبلاگ به GraphQL
      </Typography>
    </footer>
  );
}

export default Footer;
