import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './components/Login'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-[#0b0b0f] text-white flex flex-col">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App