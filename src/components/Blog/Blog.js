import React from "react";

import { useQuery } from "@apollo/client";
import { GET_POSTS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEL from "../../shared/CardEL";
import Loader from "../../shared/Loader";
import Error from "../../shared/Error";

function Blogs() {
  const { loading, data, error } = useQuery(GET_POSTS_INFO);
  console.log({ loading, data, error });
  if (loading) return <Loader />;
  if (error) return <Error error={error}/>;

  return (
    <Grid container>
      {data &&
        data.posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <CardEL {...post} />
          </Grid>
        ))}
    </Grid>
  );
}

export default Blogs;
