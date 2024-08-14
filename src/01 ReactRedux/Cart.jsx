import { Badge, Paper } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';

const Cartda = (props) => {
    console.log("Carts length", props.cartData.length);
    
    return (
        <Paper
            elevation={2}
            sx={{
                p: '20px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}
        >
            <Badge badgeContent={props.cartData.length} color="primary">
                <AddShoppingCartIcon />
            </Badge>
        </Paper>
    );
};

export default Cartda;
