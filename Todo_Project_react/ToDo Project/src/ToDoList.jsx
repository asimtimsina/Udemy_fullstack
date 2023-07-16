
const initialToDo = [
    { id: 1, text: "Walk the Cow", completed: false },
    { id: 2, text: "Walk the fish", completed: true },
    { id: 3, text: "Walk the Calf", completed: false }
]


import * as React from 'react';
import List from '@mui/material/List';

import { useState } from "react";
import ToDoItem from './ToDoItem';

export default function ToDoList() {


    const [todos, setTodos] = useState(initialToDo);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(each => each.id !== id)
        })
    }

    return (
        <>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'Background.paper' }}>

                {todos.map(todo => {

                    return <ToDoItem key={todo.id} todo={todo} removefunc={() => removeTodo(todo.id)} />
                })}

            </List>


        </>
    )




}

