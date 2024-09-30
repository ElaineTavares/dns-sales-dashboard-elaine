import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Registration, Home, Leads, Profile } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
