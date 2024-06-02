import { Avatar, Typography } from "@mui/material";
import React from "react";

function AuthorEL({ name, avatar, slug, id }) {
  return (
    <>
      <Avatar src={avatar.url} alt={slug} sx={{ marginBottom: 2 }} />
      <Typography component="p" variant="p" color="text.secondary" display="flex">
        {name}
      </Typography>
    </>
  );
}

export default AuthorEL;
