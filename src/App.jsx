import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavDropdown from './components/ui/NavDropdown.jsx'
import StyleButton from './components/ui/StyleButton.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.jsx'
import Footer from './components/ui/Footer.jsx'
import Title from './components/ui/Title.jsx'

function App() {
  // useState is a hook allowing to track state in a function component (the App component)
  // The useState function is ran once when it mounts
  const [isDark, setIsDark] = useState(() => {
    // Read the stored value of theme frmo localStorage
    const storedTheme = localStorage.getItem('theme'); // localStorage is a web browser feature to store data inside user's browser
    return storedTheme === 'dark';
  });

  // Update HTML data-theme attribute + persist theme
  // Whenever isDark changes, we run this useEffect
  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme); // Apply theme via [data-theme="dark"] {...} inside index.css
    localStorage.setItem('theme', theme); // Persist to local storage
  }, [isDark]); // <- [isDark] means we watch for changes with isDark

  return (
      <Router>
        <div className="app-wrapper">
          <NavDropdown />
          {/* We pass the props: isDark and toggleTheme so that StyleButton can use it */}
          {/* When props change, React will trigger a re-render of the StyleButton component */}
          <StyleButton isDark={isDark} toggleTheme={() => setIsDark(prev => !prev)} />
          <Title />
          <main className="main-content">
            <Routes>
              <Route path="/PersonalWebsite" element={<HomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  )
}

export default App
