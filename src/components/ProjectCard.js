import React from 'react'
import Pic from '../img/2048game.jpg'

function ProjectCard(props) {
    return (
        
        <div className='project-card' >
            <div className='project-thumbnail'>
            <a href={props.link} target="_blank"><img src={props.image}/></a>
            </div>
            <div className='card-text'>
            <a href={props.link} target="_blank"><h1 className='card-title'>{props.title}</h1></a>
                    <p className='card-body'>{props.body}</p>
                    <h3 className='tech-used'>technologies used</h3>
                    <p className='card-body'>{props.tech}</p>
            </div>
        </div>
        
    )
}

export default ProjectCard