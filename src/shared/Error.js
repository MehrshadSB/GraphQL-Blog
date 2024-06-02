import { Typography } from "@mui/material";

function Error({ error }) {
  console.log(error);
  return (
    <div
      style={{
        width: "100%",
        heigh: "100%",
        backgroundColor: "rgba(50, 50, 44, 0.5)",
        position: "fixed",
        inset: "0",
        top: "0",
        left: "0",
      }}>
      <div
        style={{
          backgroundColor: "rgba(237, 69, 92,1)",
          borderRadius: "30px",
          width: "400px",
          height: "200px",
          margin: "auto",
          marginTop: "80px",
          opacity: "1",
          zIndex: "2",
        }}>
        {error && (
          <>
            <Typography
              component="p"
              variant="p"
              dir="ltr"
              padding={4}
              color="white"
              fontWeight={600}
              sx={{ marginTop: "16px" }}>
              Error name : {error.name}
              <br />
              <br />
              Message: {error.message}
            </Typography>
          </>
        )}
      </div>
    </div>
  );
}

export default Error;
