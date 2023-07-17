
const initialToDo = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
}


import * as React from 'react';
import List from '@mui/material/List';

import { useState, useEffect } from "react";
import ToDoItem from './ToDoItem';
import TodoForm from './TodoForm';



export default function ToDoList() {


    const [todos, setTodos] = useState(initialToDo);


    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(each => each.id !== id)
        })
    }

    const toggleToDo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(each => {
                if (each.id === id) return { ...each, completed: !each.completed }
                return each;
            })
        })
    }


    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }]
        })
    }

    return (
        <>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'Background.paper' }}>

                {todos.map(todo => {

                    return <ToDoItem key={todo.id} todo={todo} removefunc={() => removeTodo(todo.id)} toggleFunc={() => toggleToDo(todo.id)} />
                })}

                <TodoForm addfunc={addTodo} />
            </List>


        </>
    )




}

