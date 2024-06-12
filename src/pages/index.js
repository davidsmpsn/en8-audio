import * as React from 'react'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { About } from '../components/about'
import { Projects } from '../components/projects'
import { Clients } from '../components/clients'

import '../style/main.scss'

import { projects } from '../data/projects'
import { companies, music } from '../data/clients'

const IndexPage = () => {
  return (
    <div>
      <div className="page_top">
        <div className="wrapper">
          <Header />
          <Hero />
        </div>
      </div>

      <div className="wrapper">
        <About />        
        <Projects projects={projects} />
        <Clients music={music} companies={companies} />

        <footer className="footer">
          &copy; EN8 Audio 2024
        </footer>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>EN8 Audio</title>
