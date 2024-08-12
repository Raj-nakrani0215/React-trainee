import { Box } from '@mui/material'
import React from 'react'

function BoxLayout() {
  return (
    <Box sx={{
        height: '200px',
        width:'500px',
        color: 'white',
        backgroundColor:'blue',
        margin:'30px',
        padding : '20px',
        '&:hover':{
            backgroundColor:'lightblue',
        },
    }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt dolores alias veritatis, placeat laudantium corporis enim, mollitia asperiores quae illum molestias, rem explicabo impedit molestiae repellat dolorem tenetur voluptatem.
        Aliquam voluptatum atque aspernatur molestias, adipisci repellendus quisquam nulla doloribus quasi laborum doloremque nesciunt pariatur eos veritatis autem quos? Omnis, neque libero assumenda ratione fugiat exercitationem atque et quam pariatur!
    </Box>
  )
}

export default BoxLayout
