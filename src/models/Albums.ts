interface Artist {
  id: string;
  name: string;
}

interface AlbumImage {
  height: number;
  width: number;
  url: string;
}

interface SavedAlbum {
  artists: Artist[];
  id: number;
  images: AlbumImage[];
  label: string;
  name: string;
  release_date: string;
}

interface AlbumItem {
  album: SavedAlbum;
}
export interface SavedAlbums {
  items: AlbumItem[];
  limit: number;
  next: string | null;
  previous: string | null;
  total: number;
}
