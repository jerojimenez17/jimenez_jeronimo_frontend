import React, { useEffect } from "react";
import { useAuthProvider } from "../context/AuthProvider";
import { fetchSavedAlbums } from "../services/AlbumService";
import { createAdapterSavedAlbum } from "../adapter/SavedAlbumAdapter";
import { SavedAlbums } from "../models/Albums";
import { AlbumCard } from "../components/AlbumCard";
import { Box, Grid } from "@mui/material";

interface MyAlbumsProps {
  page: string;
}

const MyAlbums = ({page}:MyAlbumsProps) => {
  const { token } = useAuthProvider();

  const [albums, setAlbums] = React.useState({} as SavedAlbums);

  useEffect(() => {
    if (token.token) {
      fetchSavedAlbums(token.token).then((res) => {
        setAlbums(createAdapterSavedAlbum(res));
      });
    }
  }, [token.token]);

  return (
    <Box>
    <Grid  container spacing={1} display='flex' minHeight='100vh'  >
      
          {Object.keys(albums).length > 0 ? (
            albums.items.map((item) => (
              <Grid
      item
      xl={3}
      lg={3}
      md={6}
      xs={12}
      key={item.album.id}
      alignSelf="center"
    >
            <AlbumCard album={item.album} page={page} handleAlbums={setAlbums}/>
        </Grid>
            ))
          ) : (
            <></>
          )}
      </Grid>
    </Box>
  );
};

export default MyAlbums;

