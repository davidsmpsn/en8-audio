import React from 'react'

export const Projects = ({ projects }) => (
  <div className="projects">
    {projects.map(project => (
      <div className="projects__project">
        <a href={project.link} target="_blank">
          <img src={`./projects/${project.img}.png`} alt={project.name} />
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="m243-192-51-51 429-429H384v-72h360v360h-72v-237L243-192Z"/></svg>
          <div className='projects__project-text'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        </a>
      </div>
    ))}
  </div>
)