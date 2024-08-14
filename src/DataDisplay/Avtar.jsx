import { Avatar, Stack } from '@mui/material'
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors'
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

function AvatarData() {
    return (
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>

            <Avatar
                alt="Remy Sharp"
                src="https://picsum.photos/200/300?person"
                sx={{ width: 24, height: 24 }}
            />
            <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300?person" />
            <Avatar
                alt="Remy Sharp"
                src="https://picsum.photos/200/300?person"
                sx={{ width: 56, height: 56 }}
            />

            <Avatar> <FolderIcon /> </Avatar>
            <Avatar sx={{ bgcolor: pink[500] }}> <PageviewIcon />  </Avatar>
            <Avatar sx={{ bgcolor: green[500] }}> <AssignmentIcon /> </Avatar>

            <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square"> N </Avatar>
            <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                <AssignmentIcon />
            </Avatar>
        </Stack>
    )
}

export default AvatarData
