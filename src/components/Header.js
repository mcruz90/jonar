import { Typography, Grid } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import avataricon from '../img/avataricon.jpg';

const Header = () => {
  return (
    <>
        <Container>
            <Box sx={{mb: 5}}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sx={{mt: 5, mb: 5}}>

                        <img src={avataricon} width="200px"  alt="author avatar" />
                        <Typography sx={{color:'#307FE2', fontWeight: 'bold'}} variant="h3" >My work attitude</Typography>
                        
                        <Typography sx={{color: '#40628D', fontSize: 16, fontWeight: '600'}} variant="body">
                            <p>I always have one thing at the forefront of my mind at the start of each work day: <Typography sx={{color: '#FF9E1B', fontWeight: 'bold'}}>What can I do today to make my colleague's work day less stressful?</Typography> </p>
                            <p>Having worked primarily in pharmacies over the past 6 years, this usually meant stepping in to help mediate communication hiccups with high-touch patients so that our pharmacy technicians could focus on processing prescriptions. 
                                For our pharmacists, this usually meant troubleshooting their tech issues or offering to take administrative tasks off their hands so they could focus on counselling patients.
                                For management, this meant keeping a pulse on how thing were going out on the floor and letting them know where workflow bottlenecks were occuring so they could step in and offer extra support.
                                For our new hires, this meant teaching myself how to use Adobe Illustrator so I could create flow charts and SOPs to get them up to speed on complicated parts of job.
                            </p>
                            <p>
                                Quite often, this also meant bringing in Cops Donuts and bubble tea for the team to cheer them up when we had an especially rough week.
                            </p>
                        </Typography>

                    </Grid>
                
                </Grid>
            </Box>
        </Container>

    </>
  )
}

export default Header