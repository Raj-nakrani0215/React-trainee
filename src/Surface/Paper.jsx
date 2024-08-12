import React from 'react'
import { Box, Grid , Paper} from '@mui/material'

function PaperSurface() {
  return (
    <Paper sx={{ padding : '30px', margin:'30px'}} elevation={24} >
      <Grid container spacing={2}>
                <Grid item xs={10} md={8}>
                    <Box sx={{
                        height: '100px',
                        backgroundColor: 'lightblue'
                    }}>xs=6 md=8</Box>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Box
                    sx={{
                        height: '100px',
                        backgroundColor: 'lightgreen'
                    }}>xs=6 md=4</Box>
                </Grid>
                <Grid item xs={2} md={4}>
                    <Box
                    sx={{
                        height: '100px',
                        backgroundColor: 'yellow'
                    }}>xs=6 md=4</Box>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Box sx={{
                        height: '100px',
                        backgroundColor: 'lightpink'
                    }}>xs=6 md=8</Box>
                </Grid>
            </Grid>
    </Paper>
  )
}

export default PaperSurface
