import react from 'react'

function Resume() {
    return (
        <section className='resume-section'>
            <h2 className='sub-title'>Resume</h2>
            <div className='download-div'>
            <a href={require(`../../assets/files/Resume.pdf`).default} download className='download'>Click here to download my resume</a>
            </div>
            {/* <img className='resume' src={require(`../../assets/img/Resume.jpg`).default}></img> */}
            <div className='paper'>
                <div className='top-section'>
                    <h1 className='name'>SEBASTIAN ALVARADO</h1>
                    <div className='contact'>www.linkedin.com/in/ska246801 | (956) 873-7201 | 
                        sebastianalvarado246801@gmail.com |	Portfolio: https://ska246801.github.io/React-Portfolio/
                        Github: https://github.com/SKA246801/
                    </div>
                </div>

                <h2 className='sub-headers'>INTRO</h2>
                <p className='intro'>
                    I am a full-stack developer who recently graduated from a coding bootcamp at the University of Texas at Austin.
                    I know Javascript, Python, MERN, mySQL, among other languages and frameworks.
                    Going through the bootcamp provided the insight as to how adaptable you need to be in this industry as technology is always evolving.
                    I am constantly teaching myself new things, expanding my knowledge and skillbase in all things programming related.
                    I am eager to see the things that I can achieve in my programming career.
                </p>
                <h2 className='sub-headers'>TECHNICAL SKILLS</h2>
                <div className='skill-section'>
                    <p className='skills'><span className='skill-title'>Languages:</span> Javascript, Python, HTML/CSS, SQL, GraphQL</p>
                    <p className='skills'><span className='skill-title'>Software & Frameworks:</span> Windows, Linux, Virtual Machines, Node.js, Express, React.js, Bootstrap, Git, Visual Studio Code, Sequelize, Handlebars.js, Github</p>
                    <p className='skills'><span className='skill-title'>Databases:</span> MySQL, MongoDB</p>
                    <p className='skills'><span className='skill-title'>CLoud:</span> Azure, Firebase</p>
                </div>
                <h2 className='sub-headers'>PROJECTS</h2>
                <div className='project-section'>
                    <div className='project-header'>
                        <h3 className='project-title'>Amazon Clone</h3>
                        <h3 className='project-title'>Live URL: clone-39f35.firebaseapp.com</h3>
                    </div>
                    <ul>
                        <li className='project-info'>A clone of Amazon's online store</li>
                        <li className='project-info'>Uses firebase and React.js</li>
                    </ul>

                    <div className='project-header'>
                        <h3 className='project-title'>Instagram Clone</h3>
                        <h3 className='project-title'>Live URL: instagram-clone-8a613.firebaseapp.com</h3>
                    </div>
                    <ul>
                        <li className='project-info'>A clone of Instagram's social media site</li>
                        <li className='project-info'>Uses firebase and React.js</li>
                    </ul>
                    <div className='project-header'>
                        <h3 className='project-title'>Spoti_box</h3>
                        <h3 className='project-title'>Live URL: https://ancient-harbor-80018.herokuapp.com/</h3>
                    </div>
                    <ul>
                        <li className='project-info'>Introduced this project to 3 team members which allowed users to be able to generate a spotify playlist while interacting with one another in a live chat</li>
                        <li className='project-info'>Uses Node.js and Object-oriented-programming principles</li>
                        <li className='project-info'>Used socket.io for the live chat</li>
                    </ul>
                </div>
                <h2 className='sub-headers'>WORK EXPERIENCE</h2>
                    <div className='work-header'>
                        <h3 className='work-title'>Seminaut</h3>
                        <h3 className='work-title'>Austin, Texas</h3>
                    </div>
                    <div className='work-header'>
                        <p className='work-title'>Software Developer Intern</p>
                        <p className='work-title'>March 2022 - Present</p>
                    </div>
                    <ul>
                        <li className='work-info'>Working in a team to build a website in order to connect the world of gamers</li>
                    </ul>
                    <div className='work-header'>
                        <h3 className='work-title'>Doordash</h3>
                        <h3 className='work-title'>Austin, Texas</h3>
                    </div>
                    <div className='work-header'>
                        <p className='work-title'>Delivery Driver</p>
                        <p className='work-title'>February 2021 - Present</p>
                    </div>
                    <ul>
                        <li className='work-info'>2700 deliveries and a 5 star rating completed by providing great customer service ensuring every customer’s needs are met</li>
                    </ul>
                <h2 className='sub-headers'>EDUCATION</h2>
                    <div className='education-header'>
                        <h3 className='education-title'>University of Texas at Austin</h3>
                        <h3 className='education-title'>Austin, Texas</h3>
                    </div>
                    <div className='education-header'>
                        <p className='education-title'>Fullstack Engineering bootcamp</p>
                        <p className='education-title'>August 2021</p>
                    </div>
                    <ul>
                        <li className='education-info'>This is a certification course designed to give students full stack web development skills with technologies such as jQuery, Bootstrap, Node.js, React.js, Express.js, MySQL, MongoDB and more.</li>
                    </ul>
                    <div className='education-header'>
                        <h3 className='education-title'>University of Texas at Austin</h3>
                        <h3 className='education-title'>Austin, Texas</h3>
                    </div>
                    <div className='education-header'>
                        <p className='education-title'>Computational Biology</p>
                        <p className='education-title'>August 2020 - Present</p>
                    </div>
                    <ul>
                        <li className='education-info'>GPA: 3.4/4.0</li>
                    </ul>
            </div>
        </section>
    )
}

export default Resume