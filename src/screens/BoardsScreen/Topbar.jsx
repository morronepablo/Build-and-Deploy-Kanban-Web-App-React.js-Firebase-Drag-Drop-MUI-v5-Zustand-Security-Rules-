/* eslint-disable react/prop-types */
import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import ImageEl from "../../components/utils/ImageEl";
import LogoImg from "../../assets/logo.svg";
import LogoutIcon from "@mui/icons-material/ExitToApp";

const Topbar = ({ openModal }) => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <ImageEl
          sx={{
            height: "25px",
          }}
          src={LogoImg}
          alt="Flowboard"
        />
        <Stack direction={"row"} spacing={2}>
          <Button onClick={openModal} variant="contained">
            Create board
          </Button>
          <Button startIcon={<LogoutIcon />} color="inherit">
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
