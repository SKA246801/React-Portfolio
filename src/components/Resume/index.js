import react from 'react'

function Resume() {
    return (
        <section>
            <h2 className='sub-title'>Resume</h2>
            <div className='download-div'>
            <a href={require(`../../assets/files/Resume.pdf`).default} download className='download'>Click here to download my resume</a>
            </div>
            <img className='resume' src={require(`../../assets/img/Resume.jpg`).default}></img>
        </section>
    )
}

export default Resume