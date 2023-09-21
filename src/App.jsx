import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Gallery from './pages/gallery/Gallery'
import Login from './pages/auth/login/Login'
import ErrorPage from './pages/errorPage/ErrorPage'
import PrivateRoute from './PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute> <Gallery /> </PrivateRoute>} />
        <Route path='login' element={<Login /> } />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      {/* <Gallery /> */}
    </BrowserRouter>
  )
}

export default App