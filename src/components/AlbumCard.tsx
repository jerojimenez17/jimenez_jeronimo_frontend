import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { createAdapterSavedAlbum } from "../adapter/SavedAlbumAdapter";
import { useAuthProvider } from "../context/AuthProvider";
import { Album } from "../models/Artist";
import {
  saveAlbums,
  removeAlbum,
  fetchSavedAlbums,
} from "../services/AlbumService";

interface AlbumCardProps {
  album: any;
  page: string;
  handleAlbums?: (albums: any) => void;
}

export const AlbumCard = ({ album, page, handleAlbums }: AlbumCardProps) => {
  const { token } = useAuthProvider();
  const handleAddAlbum = (id: string) => {
    if (token.token) {
      saveAlbums(token.token, id).then((res) => {
        //console.log(res);
      });
    }
  };
  const handleRemoveAlbum = (id: string) => {
    if (token.token) {
      removeAlbum(token.token, id).then(() => {
        if (token.token)
          fetchSavedAlbums(token.token).then((res) => {
            if (handleAlbums !== undefined)
              handleAlbums(createAdapterSavedAlbum(res));
          });
      });
    }
  };

  return (
    <Card
      sx={{
        borderRadius: "12px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        justifyItems: "center",
        alignContent: "centers",
        width: "20vw",
        height: "60vh",
        minHeight: "fit-content",
      }}
    >
      <CardActionArea
        sx={{
          marginY: "2px",
        }}
      >
        <CardMedia
          sx={{ height: "30vh", maxHeight: "max-content" }}
          component="img"
          // height={album.images[1].height}
          image={album.images[1].url}
          alt="Album img Not Found"
          width={album.images[1].width}
        />
        <CardContent>
          <Typography
            variant="body1"
            display="flex"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            maxHeight="fit-content"
          >
            {album.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {album.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {page === "home" && (
          <Button size="small" onClick={() => handleAddAlbum(album.id)}>
            + Add album
          </Button>
        )}
        {page === "myalbums" && (
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => handleRemoveAlbum(album.id)}
          >
            - Remove Album
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
