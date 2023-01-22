import { Box, Button, InputBase, TextField } from "@mui/material";

import "../App.css";

import React from "react";
import { useAuthProvider } from "../context/AuthProvider";
import { ResponseSpotify } from "../models/ResponseSpotify";
import { Albums } from "../models/Artist";
import { fetchAlbums } from "../services/AlbumService";
import { createAdapterArtists } from "../adapter/AdapterArtist";

interface SearchBarProps {
  handleSearch: (search: string) => void;
  setAlbums: (albums: any) => void;
  search: string;
}

const SearchBar = (props: SearchBarProps) => {
  const { token } = useAuthProvider();

  const { setAlbums, handleSearch, search } = props;

  const handleSearchClick = () => {
    if (token.token) {
      if (search === "") {
        setAlbums([]);
      } else {
        fetchAlbums(search, token.token).then((res: ResponseSpotify) => {
          setAlbums(createAdapterArtists(res));
        });
      }
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <Box
      className="div-search"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 8px 8px 0px",
        margin: "30px 10px 0px 0px",
        minWidth: "40vw",
        maxWidth: "100vw",
        background: "#FFFFFF",
        borderRadius: 24,
      }}
    >
      <InputBase
        onKeyPress={(e: any) => handleKeyPress(e)}
        onChange={(e: any) => {
          handleSearch(e.target.value);
        }}
        color="secondary"
        placeholder="Search"
        style={{
          maxWidth: "100vw",
          color: "#000000",
          fontWeight: 700,
          fontSize: 15,
          fontFamily: "Montserrat",
          minWidth: "10%",
          borderRadius: 22,
          paddingLeft: "2rem",
        }}
      />

      <Button
        variant="contained"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 42,
          minWidth: "10%",
          width: "120px",
          background: "#D6F379",
          borderRadius: "24px",
          flex: "none",
          order: 1,
          flexGrow: 0,
        }}
        onClick={handleSearchClick}
      >
        Buscar
      </Button>
    </Box>
  );
};

export default SearchBar;
