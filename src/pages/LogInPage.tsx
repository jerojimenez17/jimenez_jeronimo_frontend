import { Button, Grid, makeStyles, styled, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useEffect } from "react";
import { useAuthProvider } from "../context/AuthProvider";
import { Console } from "console";

interface LogInPageProps {
  handleLogIn: () => void;
}

const Image = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display:'flex'
  },
}))
// const useStyles = makeStyles(({theme}) => ({
//   [theme.breakpoints.down('lg')]: {
//     display:'flex'
//   },
// }))

const LogInPage = ({ handleLogIn }: LogInPageProps) => {
  const { token } = useAuthProvider();
  return (
    // <div>
    <Grid
      container
      spacing={1}
      style={{ backgroundColor: "#222222", minHeight: "100vh", marginTop: '13rem' }}
    >
       
      <Grid item xs={12} xl={6}  >
        <img
          style={{
            // margin: "15rem",
            // minWidth: "30%",
            // maxWidth: "50%",
            // minHeight: "30vh",
            // maxHeight: "50vh",
        display: 'block',
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
          }}
          className="vector2"
          src={require("../vector2.png")}
          alt="Img no found"
        />
      </Grid>
      <Grid item xs={12} xl={6}>
        <Typography variant="h2" color='inherit'>
          Disfruta de la
        </Typography>
        <Typography variant="h2" color="#D6F379">
          mejor musica
        </Typography>
        <Typography variant="h6"color='inherit'>
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
      </Grid>
    </Grid>
    // </div>
  );
};

export default LogInPage;
