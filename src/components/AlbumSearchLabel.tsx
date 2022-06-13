import { Box, Typography } from '@mui/material'
import React from 'react'

export const AlbumSearchLabel = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
         <Typography
            variant="h1"
            style={{
              width: 458,
              height: "auto",
              fontWeight: 700,
              fontSize: 64,
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Busca tus
          </Typography>

          <Typography
            variant="h2"
            style={{
              width: 458,
              height: "auto",
              fontWeight: 700,
              fontSize: 64,
              textAlign: "center",
              color: "#D6F379",
            }}
          >
            albumes
          </Typography>
          <Typography variant='h5' style={{color: '#FFF'}}>
              Encuentra tus artitas favoritos gracias a nuestro 
          </Typography><Typography variant='h5' style={{color: '#FFF'}}>
              buscador y guarda tus albumes
          </Typography>
    </Box>
  )
}
