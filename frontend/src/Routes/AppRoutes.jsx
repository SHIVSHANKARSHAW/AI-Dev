import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes