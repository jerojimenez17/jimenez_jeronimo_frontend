import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import Home from "./pages/Home";
import { useAuthProvider } from "./context/AuthProvider";
import MyAlbums from "./pages/MyAlbums";
import { Box, createTheme, Paper, ThemeProvider } from "@mui/material";

import { text } from "node:stream/consumers";

function App() {
  const [page, setPage] = React.useState("home");
  const handlePageChange = (page: string) => {
    setPage(page);
  };
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#222222",
        paper: "#222222",
      },
      primary: {
        main: "#D6F379",
      },
      secondary: {
        main: "#f44336",
      },
      action: {
        active: "#FFFF",
        hover: "#D6F379",
        hoverOpacity: 0.08,
        selected: "#D6F379",
      },
      text: {
        primary: "#FFFF",
        secondary: "#FFFF",
      },
    },

    typography: {
      fontFamily: "Montserrat",
      fontSize: 14,
    },
  });

  const { token, handleLogIn, SET_TOKEN } = useAuthProvider();
  useEffect(() => {
    const hash = window.location.hash;
    const tokenToSet = hash.substring(hash.indexOf("=") + 1, hash.indexOf("&"));
    console.log(tokenToSet);
    if (tokenToSet) {
      SET_TOKEN(tokenToSet);
      console.log(tokenToSet);
    }
  }, []);

  console.log("llamo ", token);
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Box className="App">
          <BrowserRouter>
            <NavBar handlePageChange={handlePageChange} page={page} />
            <Routes>
              {/*Private route if token !=null*/}
              <Route
                path="/"
                element={
                  token.token ? (
                    <Home page={page} />
                  ) : (
                    <LogInPage handleLogIn={handleLogIn} />
                  )
                }
              />
              <Route
                path="/myAlbums"
                element={
                  token.token ? (
                    <MyAlbums page={page} />
                  ) : (
                    <LogInPage handleLogIn={handleLogIn} />
                  )
                }
              />
            </Routes>
          </BrowserRouter>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
