import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavDropdown from './components/ui/NavDropdown.jsx'
import StyleButton from './components/ui/StyleButton.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'

function App() {
  // const [count, setCount] = useState(0)
  // Switch is deprecated. Use Routes.
  return (
    <Router>
      <NavDropdown />
      <StyleButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
