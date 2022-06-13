export interface Artist {
    id: string;
    name: string;
}
export interface Image {
    height: number;
    url: string;
    width: number;
}
export interface Album {
    name: string;
    artists: Artist[];
    images: Image[];
    id: string;
    release_date: string;
    label?: string;
}
export interface Albums {
    next: string,
    previous: string,
    total: number,
    limit: number,
    items: Album[];
}