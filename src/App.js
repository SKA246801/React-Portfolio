import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About/index'
import Work from './components/Work/index'
import Contact from './components/Contact/index'
import Resume from './components/Resume/index'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background'

function App() {
  return (
    <Router>
      <Navbar />
      <Background />
      <div className='App'>
        <Routes>
          <Route exact path='/React-Portfolio/' element={<About />} />
          <Route path='/React-Portfolio/work' element={<Work />} />
          <Route path='/React-Portfolio/contact' element={<Contact />} />
          <Route path='/React-Portfolio/resume' element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
