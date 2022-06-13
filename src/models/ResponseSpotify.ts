export interface ResponseSpotify  {
        albums: {
            items: [
                {
                    artists: [
                        {
                           id: string;
                            name: string; 
                        }
                    ],
                    id: string,
                    name: string,
                    release_date: string,
                    images: [
                        {
                            height: number,
                            url: string,
                            width: number
                        }
                    ]
                }
            ],
            next: string,
            previous: string,
            total: number,
            limit: number
    }
}


