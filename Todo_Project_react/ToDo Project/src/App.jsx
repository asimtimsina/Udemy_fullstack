import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CSSBaseline from "@mui/material/CssBaseline"
import './App.css'
import { CssBaseline } from '@mui/material'
import ToDoList from './ToDoList'


function App() {

  return (
    <>
      <CssBaseline />
      <h1>ToDos</h1>
      <ToDoList />
    </>
  )
}

export default App
