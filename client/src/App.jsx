import React, { useState, useContext } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { Navigate } from 'react-router-dom'


export const tokenContext = React.createContext(null)
const ProtectedRoute = (element) => {
  const {token} = useContext(tokenContext)
  return token ? element() : <Navigate to="/login" />
}

function App() {
  const [token, setToken] = useState(null)

  return (
    <tokenContext.Provider value={{token, setToken}}>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={HomePage} />} />
        <Route path="login" element={<LoginPage />} />  
      </Routes>
    </tokenContext.Provider>
  )
}

export default App
