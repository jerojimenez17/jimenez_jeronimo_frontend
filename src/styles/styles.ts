import {makeStyles} from '@mui/material';


export const useStyles = makeStyles((theme:any) => ({
    imageClass:{[theme.breakpoints.down('lg')]: {
      display:'flex'
    }},
  }))

