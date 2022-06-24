import React from 'react'
import Resume from '../img/Daniel Gardner Resume.pdf'

function About() {
    return (
        <div className='about-container'>
            <h1>My name is Daniel Gardner</h1>
            <p>I am a software engineer, with a background in Graphic Design.
                If I don't know how to do something, I can easily adapt and learn new skills. I love to
                surprise people by showing them new things they didn't know were possible.
            </p>
            <h2>Download my resume</h2>
            <a href={Resume} download>Download PDF</a><br />
            <a href={Resume} target="_blank">View PDF</a>
            <h2>Contact</h2>
            <a href='mailto:dannygardnercg@gmail.com'>dannygardnercg@gmail.com</a>
        </div>
    )
}

export default About