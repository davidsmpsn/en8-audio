import * as React from 'react'
import '../style/main.scss'

const IndexPage = () => {
  const music = [
    'abbey-road-studios',
    'arlo-parks',
    'bombay-bicycle-club',
    'cleo-sol',
    'david-byrne',
    'dolby-atmos',
    'dua-lipa',
    'ed-sheeran',
    'goldfrapp',
    'liam-gallagher',
    'lianne-la-havas',
    'little-simz',
    'matt-maltese',
    'metropolis',
    'moby',
    'rak-studios',
    'rex-orange-county',
    'sam-smith',
    'sony-music'
  ]

  const companies = [
    'amazon-music',
    'apple-tv',
    'awal',
    'bbc',
    'burberry',
    'cartier',
    'fender',
    'gsk',
    'koko',
    'levis',
    'netflix',
    'nickelodeon',
    'polydor',
    'sky-arts',
    'umg'
  ]

  const projects = [
    {
      name: 'Rex Orange County',
      description: 'Description',
      img: 'rex'
    },
    {
      name: 'Shyfoot',
      description: 'Live Session',
      img: 'shyfoot'
    },
    {
      name: 'Jamie T',
      description: 'Live at Finsbury Park',
      img: 'jamie-t'
    },
    {
      name: 'Heading',
      description: 'Description',
      img: 'fender'
    },
    {
      name: 'Heading',
      description: 'Description',
      img: 'koko'
    },
    {
      name: 'Heading',
      description: 'Description',
      img: 'kiwanuka'
    },
    {
      name: 'Heading',
      description: 'Description',
      img: 'rex'
    },
    {
      name: 'Heading',
      description: 'Description',
      img: 'rex'
    },
    {
      name: 'Heading',
      description: 'Description',
      img: 'rex'
    },
    {
      name: 'Heading',
      description: 'Description',
      img: 'rex'
    }
  ]

  return (
    <div>
      <div className="page_top">
        <div className="wrapper">
        
          <div className="header">
            <h1><a href="">EN8 Audio</a></h1>
            <div className="header__nav">
              <ul>
                <li><a href="">Projects</a></li>
                <li><a href="">Clients</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="hero">
            <div className="hero__inner">
              <h2>
                <span>Audio recording, mixing and production </span>
                <span>in the commercial & creative domain.</span>
              </h2>

              <a href="contact" className="button">Get In Touch</a>
            </div>
          </div>
        
        </div>
      </div>

      <div className="wrapper">

        <div className="about">
          <p><span>London based</span>, we are a team with over <span>30 years experience</span> in the field.</p>
          <p>Working across <span>location sound</span>, <span>audio post-production</span> and <span>commercial recorded music</span>; trusted by some of the <span>biggest recording artists</span> and most <span>established production companies alike</span></p>
        </div>

        <div className="projects">
          {projects.map(project => (
            <div className="projects__project">
              <a href="">
                <img src={`./projects/${project.img}.png`} alt={project.name} />
                <h3><span>{project.name}</span> // {project.description}</h3>
              </a>
            </div>
          ))}
        </div>

        <div className="clients">
          <div className="clients__list">
          {music.map(client => (
              <div className="clients__client">
                <img src={`./client-logos/music/${client}.svg`} alt="client" />
              </div>
            ))}
          </div>
          <div className="clients__list">
            {companies.map(client => (
              <div className="clients__client">
                <img src={`./client-logos/companies/${client}.svg`} alt="client" />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
