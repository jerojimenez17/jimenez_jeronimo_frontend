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

const MyAlbums = ({ page }: MyAlbumsProps) => {
  const { token } = useAuthProvider();

  const [albums, setAlbums] = React.useState({} as SavedAlbums);

  useEffect(() => {
    if (token.token) {
      console.log(token.token);
      fetchSavedAlbums(token.token).then((res) => {
        setAlbums(createAdapterSavedAlbum(res));
      });
    }
  }, [token.token]);

  return (
    <Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        alignSelf="center"
      >
        {Object.keys(albums).length > 0 ? (
          albums.items.map((item) => (
            <Box key={item.album.id} display="flex" height="50vh" m={1}>
              <AlbumCard
                album={item.album}
                page={page}
                handleAlbums={setAlbums}
              />
            </Box>
          ))
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default MyAlbums;
