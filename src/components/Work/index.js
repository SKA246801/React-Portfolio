import react, { useState } from 'react'
import Project from '../Projects'

const AllWork = () => {
    const [work] = useState([

        {
            title: 'Employee Tracker',
            type: 'Backend Application',
            description: 'This application allows a manager to have a structured database with their employees and their corresponding data.',
            link: 'https://drive.google.com/file/d/15IO31rpR_XUA2G4Xyz5I9_ZEHSqYItgg/view',
            repo: 'https://github.com/SKA246801/Employee-tracker',
            id: 'employee-tracker'
        },
        {
            title: 'Team Generator',
            type: 'Fullstack Application',
            description: "This is a team generator in which someone can create a basic site that has data of the company's mangers, engineers, and interns.",
            link: 'https://drive.google.com/file/d/1c7z6cRhe3bRhT1qxc0m2YWSwxDDLxWcT/view',
            repo: 'https://github.com/SKA246801/Team-info-generator',
            id: 'team-generator'
        },
        {
            title: 'Spoti_box',
            type: 'Fullstack Application',
            description: "This application has a live chat that you can use to chat with your friends while generating a playlist using Spotify's API.",
            link: 'https://ancient-harbor-80018.herokuapp.com/',
            repo: 'https://github.com/SKA246801/Spoti-box',
            id: 'spoti_box'
        },
        {
            title: 'Tech Blog',
            type: 'Fullstack Application',
            description: 'This is a blog site in which a user can create a login and post their thoughts. Other users can view and comment on these post.',
            link: 'https://floating-lake-10462.herokuapp.com/',
            repo: 'https://github.com/SKA246801/tech_blog',
            id: 'tech-blog'
        },
        {
            title: 'Marvel Personality Quiz',
            type: 'Frontend Application',
            description: 'This is a quiz in which a user answers a series of questions and upon completion will be shown the superhero that most closely corresponds to their choices.',
            link: 'https://ska246801.github.io/Marvel-Quiz-Project-1/',
            repo: 'https://github.com/SKA246801/Marvel-Quiz-Project-1',
            id: 'marvel-quiz'
        },
        {
            title: 'Weather App',
            type: 'Frontend Application',
            description: 'This weather application allows a user to search a city and find the current weather as well as the forecast for the next 5 days.',
            link: 'https://ska246801.github.io/Weather/',
            repo: 'https://github.com/SKA246801/Weather',
            id: 'weather'
        },
        {
            title: 'Random Quiz',
            type: 'Frontend Application',
            description: 'This is a random quiz that allows a user to save their score at the end in order to see how they did compared to others who took the quiz on the same device.',
            link: 'https://ska246801.github.io/Timed-Quiz/',
            repo: 'https://github.com/SKA246801/Timed-Quiz',
            id: 'random-quiz'
        },
        {
            title: 'Password Generator',
            type: 'Frontend Application',
            description: 'This application will ask a user a series of questions and generate a secure password based on their answers.',
            link: 'https://ska246801.github.io/Password-Generator/',
            repo: 'https://github.com/SKA246801/Password-Generator',
            id: 'password-generator'
        },
    ])

    return (
        <section id='work'>
            {work.map((work) => (
                <Project key={work.title} work={work}/>
            ))}
        </section>
    )
}

export default AllWork