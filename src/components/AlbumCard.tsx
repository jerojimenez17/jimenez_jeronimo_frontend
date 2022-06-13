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
        if (token.token )
          fetchSavedAlbums(token.token).then((res) => {
            if(handleAlbums!== undefined)
            handleAlbums(createAdapterSavedAlbum(res));
          });
      });
    }
  };

  return (
    <Card
      sx={{ borderRadius: "12px" }}
      style={{
        // margin: "15rem",
        // minWidth: "30%",
        // maxWidth: "50%",
        // minHeight: "30vh",
        // maxHeight: "50vh",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
        height: "90%",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={album.images[1].height}
          image={album.images[1].url}
          alt="Album img Not Found"
          width={album.images[1].width}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" >
            {album.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {album.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {page == "home" && (
          <Button
            size="small"
            onClick={() => handleAddAlbum(album.id)}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "24px",
              gap: "42px",
              width: "154px",
              height: "44px",
              color: "#000",
              background: "#D6F379",
              borderRadius: "24px",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Monserrat",
            }}
          >
            + Add album
          </Button>
        )}
        {page == "myalbums" && (
           <Button
           size="small"
           variant="contained"
           color="error"
           onClick={() => handleRemoveAlbum(album.id)}
           style={{
             display: "flex",
             flexDirection: "row",
             justifyContent: "center",
             alignItems: "center",
             padding: "24px",
             gap: "42px",
             width: "154px",
             height: "44px",
             borderRadius: "24px",
             fontSize: "14px",
             fontWeight: "600",
             fontFamily: "Monserrat",
           }}
         >
           - Remove Album
         </Button>
        )}
      </CardActions>
    </Card>
  );
};
