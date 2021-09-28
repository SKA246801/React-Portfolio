import React from 'react'

function Project({ work }) {
    const { title, type, description, link, id } = work
    return (
        <section key={title}>
            <div>
                <h3 className='project-title'>{title}<br></br><span>{type}</span></h3>
            </div>
            <a href={link} className='project' target='_blank' rel='noreferrer'>
                <img src={require(`../../assets/img/${id}.jpg`).default} alt={title} className='project-img'></img>
            </a>
            <img src=''></img>
            <p className='project-description'>{description}</p>
        </section>
    )
}

export default Project