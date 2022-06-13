import axios from "axios";

export const fetchAlbums = async (artista: string, token: string, offset?: number) => {
  return axios
  
    .get(`https://api.spotify.com/v1/search?q=${artista}&type=artist%2Calbum&limit=4${offset ? '&offset='+offset : ''}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchSavedAlbums = async (token: string) => {
  return axios
    .get(`https://api.spotify.com/v1/me/albums`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
        console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

//function which saves the albums in the user's account making a put method to the endpoint /me/albums by id
export const saveAlbums = async (token: string, id: any) => {
  // I trid to use the axios library to make a put request to the endpoint and get 401 error

  // return axios
  // .put(`https://api.spotify.com/v1/me/albums?ids=${id}`, {
  //         headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //             Authorization : `Bearer ${token}`,
  //         },
  //     })
  //     .then((response) => {
  //         console.log(response);
  //         return " ";
  //     }
  //     )
  //     .catch((error) => {
  //         console.log(error);
  //     }
  //     );

  const response = await fetch(
    `https://api.spotify.com/v1/me/albums?ids=${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  try {
    const data = await response;
    //    return data;
  } catch (error) {
    //console.log(error);
    return error;
  }
};

export const removeAlbum = async (token: string, id: string) => {
  return axios
    .delete(`https://api.spotify.com/v1/me/albums?ids=${id}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getNextAlbums = async (nextAlbumUrl: string, token: string) => {
  return axios
    .delete(``, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPreviousAlbums = async (
  prevAlbumUrl: string,
  token: string
) => {
  return axios
    .delete(``, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
