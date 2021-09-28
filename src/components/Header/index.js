import React from 'react'
import Nav from '../Nav'

function Header(props) {
    const { sections = [], setCurrentSection, currentSection  } = props

    return (
        <header>
            <h1>Sebastian</h1>
            <Nav
                sections={sections}
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
            >
            </Nav>
        </header>
    )
}

export default Header