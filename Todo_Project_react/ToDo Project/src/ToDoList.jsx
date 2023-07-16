
const initialToDo = [
    { id: 1, text: "Walk the Cow", completed: false },
    { id: 2, text: "Walk the fish", completed: true },
    { id: 3, text: "Walk the Calf", completed: false }
]


import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from "react";

export default function ToDoList() {


    const [todos, setTodos] = useState(initialToDo);

    return (
        <>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'Background.paper' }}>

                {todos.map(todo => {

                    const labelId = `checkbox-list-label-${todo.id}`;

                    return (
                        <ListItem
                            key={todo.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <CommentIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={todo.completed}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={todo.text} />
                            </ListItemButton>
                        </ListItem>
                    );


                })}
            </List>


        </>
    )




}

