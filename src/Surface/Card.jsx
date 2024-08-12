import { Button,Card,CardActionArea,CardActions,CardContent ,CardHeader,CardMedia,Typography} from '@mui/material'
import React from 'react'

function CardSurface() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardHeader
          title="Card Title"
          subheader="September 14, 2024"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://source.unsplash.com/random"
          alt="Random Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is a description of the card content. You can put any text or content here that you like.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardSurface
