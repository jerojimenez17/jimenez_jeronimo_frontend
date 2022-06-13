import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthProvider } from "../context/AuthProvider";

interface NavBarProps {
  handlePageChange: (page: string) => void;
  page: string;
}

const NavBar = ({ handlePageChange, page }: NavBarProps) => {
  const { token ,REMOVE_TOKEN} = useAuthProvider();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#2222" }}>
        <Toolbar>
          <Link
            to="/"
            onClick={() => handlePageChange("home")}
            style={{ textDecoration: "none", color: "#FFFF" }}
          >
            <Typography variant="h4">Jimenez</Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            {token.token && (<>
              <Link
                onClick={() => handlePageChange("home")}
                style={{ textDecoration: "none", color: "#FFFF" }}
                to="/"
              >
                <Typography
                  variant="h6"
                  color={page == "home" ? "primary" : "#FFFF"}
                >
                  Search
                </Typography>{" "}
              </Link>
            

            <Typography variant="h6" color="#FFFF">
              |
            </Typography>

            
              <Link
                onClick={() => handlePageChange("myalbums")}
                style={{ textDecoration: "none", color: "#FFFFFF" }}
                to="/myAlbums"
              >
                <Typography
                  variant="h5"
                  color={page == "myalbums" ? "primary" : "inherit"}
                >
                  My Albums{" "}
                </Typography>
              </Link>
            
            <Typography
            variant="h6"
            color='#FFFF'
          >
            |
          </Typography>
            
              <Link
                onClick={() =>{ handlePageChange("/")
                REMOVE_TOKEN();
            }
              }
                style={{ textDecoration: "none", color: "#FFFFFF" }}
                to="/"
              >
                <Typography
                  variant="h5"
                  color="inherit"
                >
                  Logout{" "}
                </Typography>
              </Link>
            </>)}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
