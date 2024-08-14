import { AppBar, Box, Button, ButtonGroup, Drawer, Grid, IconButton, List, ListItem, ListItemText, Paper, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';


function ToDo() {

    const [data, setData] = useState({});
    const [Todo, setTodo] = useState([]);
    const [complete, setComplete] = useState([]);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ [name]: value });
    };

    const submitData = () => {
        if (!data.todo) {
            alert("please add some task");
        } else {
            setTodo(prevEntries => [...prevEntries, data.todo]);
            console.log(Todo);
        }
        setData({});
    }
    const handleDelete = (index) => {
        setTodo(prevTodos => prevTodos.filter((_, i) => i !== index));
    };

    const handleComplete = (index) => {
        setComplete(prevComplete => [...prevComplete, Todo[index]]);
        setTodo(prevTodos => prevTodos.filter((_, i) => i !== index));
        console.log(complete);
    };

    const handleCompleteDelete = (index) => {
        setComplete(prevTodos => prevTodos.filter((_, i) => i !== index));
    };
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };
    return (
        <>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Completed Task
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <h1 > Completed Task </h1>
                    <List>
                        {complete.map((text, index) => (
                            <ListItem button key={index}>
                                <ListItemText primary={text} />
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={() => handleCompleteDelete(index)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
            <Box
                sx={{
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    height: 'auto',
                }}
            >

                <Paper
                    elevation={3}
                    sx={{
                        padding: '20px',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant='h3'>Todo List</Typography>

                    <ButtonGroup variant="text" aria-label="Basic button group">
                        <TextField id="standard-basic"
                            variant="standard"
                            name="todo"
                            value={data.todo || ''}
                            onChange={handleChange} />
                        <Button onClick={submitData}><AddIcon /></Button>
                    </ButtonGroup>

                </Paper>
            </Box>

            <Box sx={{
                mx: '100px',
                my: '20px',
                display: 'flex',
                justifyContent: 'center',
                height: 'auto',
            }}
            >
                <Grid container spacing={2} columns={10}  >
                    {Todo.map((entry, index) => (

                        <Grid item xs={2} key={index}>
                            <Paper elevation={3}
                                sx={{
                                    py: "20px",
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant='subtitle1'>Task {index + 1}</Typography>
                                <Typography variant='body1'>{entry}</Typography>
                                <Button variant="text" color="error" onClick={() => handleDelete(index)}>Delete</Button>
                                <Button variant="outlined" color="success" onClick={() => handleComplete(index)}>Complete</Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default ToDo
