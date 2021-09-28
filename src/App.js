import React, { useState } from 'react'
import About from './components/About'
import Background from './components/Background'
import Header from './components/Header'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  const [sections] = useState([
    { name: 'About Me'},
    { name: 'Work'},
    { name: 'Contact'},
    { name: 'Resume'}
  ])

  const [currentSection, setCurrentSection] = useState(sections[0])

  return (
    <section>
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></Header>
      <Background></Background>
      <main>
        {currentSection.name === 'About Me' && <About />}
        {currentSection.name === 'Work' && <Work />}
        {currentSection.name === 'Contact' && <Contact />}
        {currentSection.name === 'Resume' && <Resume />}
      </main>
    </section>
  );
}

export default App;