import React from 'react'
import { Typography, Grid } from '@mui/material'

const NavBar = () => {
  return (
    <>
    <Grid sx={{backgroundColor: '#307FE2'}}>
    <Typography variant="h5" sx={{color: '#ffffff', pt: 3, pb: 3}}>Hello Jonar!</Typography>   
    </Grid> 
    </>
  )
}

export default NavBar