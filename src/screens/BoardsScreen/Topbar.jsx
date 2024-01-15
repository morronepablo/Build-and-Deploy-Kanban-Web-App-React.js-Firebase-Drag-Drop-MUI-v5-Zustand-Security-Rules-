import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import ImageEl from "../../components/utils/ImageEl";
import LogoImg from "../../assets/logo.svg";

const Topbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <ImageEl src={LogoImg} alt="Flowboard" />
        <Stack direction={"row"} spacing={2}>
          <Button variant="contained">Create Board</Button>
          <Button>Logout</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
