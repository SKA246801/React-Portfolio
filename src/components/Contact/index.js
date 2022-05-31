import react from 'react'

function Contact() {
  return (
    <section>
      <h2 className='sub-title'>Contact info</h2>
      <div className='info'>
        <li>
          <strong>Email:</strong>{' '}
          <a href='mailto:sebastianalvarado246801@gmail.com' target='_blank' rel='noreferrer'>
            sebastianalvarado246801@gmail.com
          </a>
        </li>
        <li>
          <strong>Github:</strong>{' '}
          <a href='https://github.com/SKA246801' target='_blank' rel='noreferrer'>
            SKA246801
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href='https://www.linkedin.com/in/sebastian-alvarado-aa0bab208/' target='_blank' rel='noreferrer'>
            Sebastian Alvarado
          </a>
        </li>
        <li>
          <strong>Phone:</strong> (956) 873-7201
        </li>
      </div>
    </section>
  )
}

export default Contact
