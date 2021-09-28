import react from 'react'

function Nav(props) {
    const { sections = [], setCurrentSection, currentSection } = props

    return (
        <nav>
            <ul>
                {sections.map((section) => (
                    <li key={section.name}>
                        <span
                            className={`${currentSection.name === section.name && 'navActive'}`}
                            onClick={() => {setCurrentSection(section)}}
                        >
                            {section.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav