import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <route path="/" element={<div>Home</div>} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes