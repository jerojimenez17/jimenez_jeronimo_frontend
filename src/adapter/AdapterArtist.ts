import {ResponseSpotify} from '../models/ResponseSpotify';
import {Albums, Artist} from '../models/Artist';

 export const createAdapterArtists= (response:ResponseSpotify):Albums => {
 const albums = response.albums;
    const formatedAlbums = {
        next: albums.next,
        previous: albums.previous,
        total: albums.total,
        limit: albums.limit,
        items: albums.items.map((album) => {
            return {
                id: album.id,
                name: album.name,
                artists: album.artists.map((artist) => {
                    return {
                        id: artist.id,
                        name: artist.name,
                    }}),
                images: album.images.map((image) => {
                    return {
                        height: image.height,
                        url: image.url,
                        width: image.width,
                        }}),
                release_date: album.release_date,
            }
        })
    }
    return formatedAlbums;
    }
