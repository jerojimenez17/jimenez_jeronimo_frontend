import { AlbumSharp, Group, Search } from "@mui/icons-material";
import { Grid, Pagination, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { useAuthProvider } from "../context/AuthProvider";
import { ResponseSpotify } from "../models/ResponseSpotify";
import { createAdapterArtists } from "../adapter/AdapterArtist";
import { Album, Albums, Artist } from "../models/Artist";
import { AlbumSearchLabel } from "../components/AlbumSearchLabel";
import { AlbumCard } from "../components/AlbumCard";
import { fetchAlbums } from "../services/AlbumService";
import { Box, Container } from "@mui/system";
interface AlbumsProps {
  page: string;
}
const Home = ({ page }: AlbumsProps) => {
  const { token } = useAuthProvider();
  const [search, setSearch] = React.useState("");
  const [albums, setAlbums] = React.useState<Albums>({} as Albums);

  // const { dispatch, loading, error, albums } = useAlbumsProvider();

  // useEffect(() => {
  //   if (token.token) {
  //     fetchAlbums(search, token.token).then((res: ResponseSpotify) => {
  //       // console.log(res);
  //       setAlbums(createAdapterArtists(res));
  //     });
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   // if (token.token) {
  //   //   fetchAlbums(search, token.token).then((res: ResponseSpotify) => {
  //   //     // console.log(res);
  //   //     setAlbums(createAdapterArtists(res));
  //   //   });
  //   // }
  // }, [search, token.token]);

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const handlePageChange = (e: any, page: number) => {
    if (token.token) fetchAlbums(search, token.token, (page-1)*4).then((res: ResponseSpotify) => {
            // console.log(res);
            setAlbums(createAdapterArtists(res));
          });
  }

  return (
    <Container>
      <Grid
        container
        spacing={1}
        style={{
          minHeight: "100vh",
          backgroundColor: "#22222",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop:'1rem',
        }}
      >
        <Grid item xs={12}>
          <AlbumSearchLabel />
        </Grid>
        <Grid item xs={12} style={{maxWidth:700}}>
         
    
          <SearchBar
            handleSearch={handleSearch}
            setAlbums={setAlbums}
            search={search}
          />

         
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            {search && `Guarda tus albumes favoritos de ${search}`}
          </Typography>
        </Grid>
        {/* {
          loading ? 
          <div>Loading...</div> : 
          error ? 
          <Alert /> :
          albums ? albums.items.map((album: Album) => (
            <Grid item xs={3} key={album.id}>
              <AlbumCard album={album} />
            </Grid>
          )) : <></>
        } */}
        <Grid item container spacing={1} direction="row"  >
          {Object.keys(albums).length > 0 ? (
            albums.items.map((album: Album) => (
              <Grid
                item
                xl={3}
                lg={3}
                md={6}
                xs={12}
                key={album.id}
                alignSelf="center"
              >
                <AlbumCard album={album} page={page} />
              </Grid>
            ))
          ) : (
            // <div>Loading...</div>
            <></>
          )}
        </Grid>
      </Grid>
      {Object.keys(albums).length > 0 ? (
      <Pagination count={11} style={{}} defaultPage={1} 
        onChange={(e: any, page: number) => handlePageChange(e,page)}
        variant="outlined"/> ):<></>}{/* Default ranges */}
      {/* <Pagination
        count={albums.total / albums.limit}
        onChange={() => console.log("hola")}
        variant="outlined"
      /> */}
    </Container>
  );
};

export default Home;
