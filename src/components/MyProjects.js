import React from 'react'
import JsGame from '../img/2048game.jpg'
import Mod from '../img/modpack.jpg'
import F2P from '../img/f2pgames.jpg'
import ProjectCard from './ProjectCard'

function MyProjects() {
  return (
    <div className='project-container'>
      <ProjectCard
        link="https://github.com/DannyGardner2/MPF-frontend"
        image={Mod}
        title="Minecraft Modpack Finder"
        body="This is a site I created to find modpacks for the game Minecraft. You can choose which mods you like, and the list of modpacks
      updates in real time."
        tech="React, html, css, javascript"
      />
      <ProjectCard
        link="https://git.generalassemb.ly/DannyGardner/2048"
        image={JsGame}
        title="2048 Javascript Game"
        body="This was one of my early projects using Javascript. 
      While the game was not my original idea, I tried my best to add my personal touch to it."
        tech="html, css, javascript"
      />
      <ProjectCard 
      link="https://github.com/DannyGardner2/Project2"
      image={F2P}
      title="F2P games"
      body="This is one of my first apps using an API. I didn't complete all of the functionality, however it was just a 
      quick project for class. I learned a lot about what you can do with an API. I really liked how the colors turned out."
      tech=""
      />

    </div>
  )
}

export default MyProjects