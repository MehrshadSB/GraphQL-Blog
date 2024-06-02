import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../Authors/Authors";
import Blogs from "../Blog/Blog";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xd={12} md={9}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            مقاله ها
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
