import { Box, Button, Paper, Stack } from '@mui/material'
import React from 'react'

const Home = (props) => {
    console.log("home props", props.cartData);
    return (
        <>

            <Paper elevation={10}>
            <h1>Redux Turorial</h1>
                <Stack direction="row" useFlexGap flexWrap="wrap" justifyContent='center' alignItems='center' spacing={5} sx={{ p: '20px' }}>
                    <Box>
                        <img src="https://m.media-amazon.com/images/I/41fCDR6pjpL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                        <h1>Price: $1010.00</h1>
                        <Button variant='outlined' onClick={() => props.addToCartHandler({ name: 'Samsung', price: 1010.00 ,pid:1 })}>Add to cart</Button>
                        <Button variant='outlined' color="error" onClick={() => props.removeToCartHandler({ pid:1})}>Remove to cart</Button>
                    </Box>
                    <Box>
                        <img src="https://m.media-amazon.com/images/I/71k1NTr2TnL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                        <h1>Price: $100.00</h1>
                        <Button variant='outlined' onClick={() => props.addToCartHandler({ name: 'Real me', price: 100.10,pid:2 })}>Add to cart</Button>
                        <Button variant='outlined' color="error" onClick={() => props.removeToCartHandler({ pid:2 })}>Remove to cart</Button>
                    </Box>
                    <Box>
                        <img src="https://m.media-amazon.com/images/I/31Hm1d5P8aL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                        <h1>Price: $1050.00</h1>
                        <Button variant='outlined' onClick={() => props.addToCartHandler({ name: 'Samsung', price: 1050.10,pid:3 })}>Add to cart</Button>
                        <Button variant='outlined' color="error" onClick={() => props.removeToCartHandler({ pid:3 })}>Remove to cart</Button>
                    </Box>
                    <Box>
                        <img src="https://m.media-amazon.com/images/I/4180tJsogaL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                        <h1>Price: $95.00</h1>
                        <Button variant='outlined' onClick={() => props.addToCartHandler({ name: 'Real me', price: 95.10,pid:4 })}>Add to cart</Button>
                        <Button variant='outlined' color="error" onClick={() => props.removeToCartHandler({ pid:4 })}>Remove to cart</Button>
                    </Box>
                </Stack>
            </Paper>

        </>
    )
}

export default Home
