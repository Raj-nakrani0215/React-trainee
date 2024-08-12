import { Stack, Divider, Box } from '@mui/material'
import React from 'react'

function StackLayout() {
    return (
        <Stack
            direction='column'
            // direction={{ xs: 'column', sm: 'row' }} responsive using breakpoints
            divider={<Divider orientation="horizontal" useFlexGap flexWrap="wrap" />}
            spacing={2}
            // spacing={{xs:1 ,sm:2 , md:4 ,lg:5}} responsive using break points
        >
            <Box sx={{
                height: '100px',
                width: '100px',
                backgroundColor: 'lightblue'
            }}>Box 1</Box>

            <Box sx={{
                height: '100px',
                width: '100px',
                backgroundColor: 'lightpink'
            }}>Box 2</Box>

            <Box sx={{
            height:'100px',
            width:'100px',
            backgroundColor:'lightgreen'
         }}>Box 3</Box>   

         <Box sx={{
            height:'100px',
            width:'100px',
            backgroundColor:'lightyellow'
         }}>Box 4</Box>   
        </Stack>
    )
}

export default StackLayout
