import React from 'react'
import JsGame from '../img/2048game.jpg'
import Mod from '../img/modpack.jpg'
import ProjectCard from './ProjectCard'

function MyProjects() {
  return (
    <div className='project-container'>
      <ProjectCard
        image={Mod}
        title="Minecraft Modpack Finder"
        body="This is a site I created to find modpacks for the game Minecraft. You can choose which mods you like, and the list of modpacks
      updates in real time."
        tech="React, html, css, javascript"
      />
      <ProjectCard
        image={JsGame}
        title="2048 Javascript Game"
        body="This was one of my early projects using Javascript. 
      While the game was not my original idea, I tried my best to add my personal touch to it."
        tech="html, css, javascript"
      />

    </div>
  )
}

export default MyProjects