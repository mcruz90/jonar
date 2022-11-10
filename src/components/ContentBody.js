import React from 'react'
import { Typography, Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ContentBody = () => {
  return (
    <>
            <Box sx={{backgroundColor: '#E5F1FF'}}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Container sx={{mb: 5}}>

                        <Typography sx={{color:'#307FE2', fontWeight: 'bold', mb: 3}} variant="h3" >My mission at Jonar</Typography>
                        <Typography sx={{color: '#40628D', fontSize: 16, fontWeight: '600'}} variant="body">
                        
                        <Typography sx={{color:'#307FE2', fontWeight: 'bold'}} variant="h5" >Learn from my mistakes</Typography>
                        <p>How can my Google-fu skills or advice from senior developers help me understand and learn from my mistake?</p>
                        <p>As Jonar's Padawan, I am ready to learn the ways of SCRUM.</p>
                        <p>I will keep DRY and SOLID in mind as I write code and annotate my code to make it easier for seniors to review my code. 
                        </p>
                        <Typography sx={{color:'#307FE2', fontWeight: 'bold'}} variant="h5" >Challenge the status quo</Typography>
                        <p>If a particular process has become more complex or outdated, what input can I give to improve the way things are done?</p>

                        <Typography sx={{color:'#307FE2', fontWeight: 'bold'}} variant="h5" >Treat people like people.</Typography>
                        <p>
                           People and companies have their own idiosyncrasies, and the best way to help them acheive their goals is to tailor solutions to them. 
                           So Cops Donuts might be hard to ship out to the team in Montreal, but I will practice my hand-to-mouse coordination for Scribbl.
                        </p>
                        
                        </Typography>
                        </Container>
                    </Grid>
                
                </Grid>
            </Box>
    </>
  )
}

export default ContentBody