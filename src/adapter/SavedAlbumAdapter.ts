import { SavedAlbums } from "../models/Albums";
import { SavedAlbum, SavedAlbumWS } from "../models/AlbumsWS";

export const createAdapterSavedAlbum = (
  response: SavedAlbumWS
): SavedAlbums => {
  const formatedAlbums = {
    next: response.next,
    previous: response.previous,
    limit: response.limit,
    total: response.total,
    items: response.items
    // .map((album) => {
    //   return {
    //     id: album.album.id,
    //     name: album.album.name,
    //     artists: album.album.artists.map((artist) => {
    //       return {
    //         id: artist.id,
    //         name: artist.name,
    //       };
    //     }),
    //     images: album.album.images.map((image) => {
    //       return {
    //         height: image.height,
    //         url: image.url,
    //         width: image.width,
    //       };
    //     }),
    //     label: album.album.label,
    //     release_date: album.album.release_date,
    //   };
    // }),
  };
  return formatedAlbums;
};
