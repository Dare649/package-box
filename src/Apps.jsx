import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Proceed from './Proceed'

const Apps = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/proceed' element={<Proceed/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Apps
