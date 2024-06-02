import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SEND_COMMENTS } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ComentsForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComments, { loading, data, error }] = useMutation(SEND_COMMENTS, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });

  const commentHandler = () => {
    if (name && email && text) {
      sendComments();
    } else {
      toast.warn("فرم را کامل پرکنید", {
        position: "top-center",
      });
    }
  };

  if (data) {
    toast.success("کامنت ارسال شد منتظر تایید", {
      position: "top-center"
    })
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}>
      <Grid item xs={12} m={2}>
        <Typography
          componenet="0"
          vatiany="h6"
          fontWeight={700}
          color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained">در حال ارسال...</Button>
        ) : (
          <Button variant="contained" onClick={commentHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default ComentsForm;
