import { Button, Container, TextField } from "@mui/material";

export const DetailCatcher = () => {
  return (
    <Container>
      <TextField
        margin="dense"
        required
        fullWidth
        id="name"
        label="Enter your name"
        name="name"
        variant="standard"
        autoFocus
      />
      <TextField
        margin="dense"
        required
        fullWidth
        name="artist"
        label="Search Artist / Band"
        variant="standard"
        id="arist"
      />
      <Button type="submit" variant="contained" sx={{ my: 1, px: 4 }}>
        PLAY
      </Button>
    </Container>
  );
};
