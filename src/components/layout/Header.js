import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Header() {
  return (
    <div>
      <AppBar position="sticky" style={{ backgroundColor: "#32322C" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Box flexGrow={1}>
              <Typography component="h1" variant="h5">
                وبلاگ بوتو استارت
              </Typography>
            </Box>
            <Box>
              <BookIcon />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
