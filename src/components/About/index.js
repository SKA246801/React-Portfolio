import React from 'react'
import selfImg from '../../assets/img/Self.jpg'

function About() {
    return (
        <section>
            <img src={selfImg} alt='Profile Pic' className='Self'/>
            <p id='bio'>
                I’m a full-stack developer who recently graduated from a coding bootcamp at the University of Texas at Austin.
                Going through the bootcamp has shown me just how adaptable you need to be in this industry as technology is always evolving.
                I am constantly teaching myself new things, expanding my knowledge and skillbase in all things programming related.
                I am eager to see the things that I can achieve in my programming career.
                <br></br>
                <br></br> <q><i>It isn't about what was or wasn't accomplished in the past, but the success that can be achieved in the future</i></q>
                <br></br> ~ Sebastian Alvarado
            </p>
        </section>
        
    )
}

export default About