import { Box } from '@mui/material'
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home';
import Footer from './component/Footer'
import Navbar from './component/Navbar'








const App = () => {
  return (
    <Box width={{xl:'1488px'}}  m='auto'>
       <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>                 
           <Route path='exercise/:id' element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App