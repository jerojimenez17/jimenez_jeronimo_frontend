import {
  Box,
  Button,
  Grid,
  makeStyles,
  styled,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useEffect } from "react";
import { useAuthProvider } from "../context/AuthProvider";
import { Console } from "console";

interface LogInPageProps {
  handleLogIn: () => void;
}

const Image = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
}));
// const useStyles = makeStyles(({theme}) => ({
//   [theme.breakpoints.down('lg')]: {
//     display:'flex'
//   },
// }))

const LogInPage = ({ handleLogIn }: LogInPageProps) => {
  const { token } = useAuthProvider();
  return (
    // <div>
    <Box
      className="login-container"
      style={{
        backgroundColor: "#222",
        minHeight: "100vh",
      }}
    >
      <Box>
        <img
          className="vector2"
          src={require("../vector2.png")}
          alt="Img no found"
        />
      </Box>
      <Box>
        <Typography variant="h2" color="#FFFF">
          Disfruta de la
        </Typography>
        <Typography variant="h2" color="primary">
          mejor musica
        </Typography>
        <Typography variant="h6" color="#FFFF">
          Accede a tu cuenta para guardar tus albumes favoritos.
        </Typography>
        <Button
          onClick={handleLogIn}
          variant="text"
          color="inherit"
          size="large"
          endIcon={<ArrowForwardIcon fontSize="large" color="primary" />}
        >
          Log In on Spotify
        </Button>
        {token != null && <h6>{token.token}</h6>}
      </Box>
    </Box>
    // </div>
  );
};

export default LogInPage;
