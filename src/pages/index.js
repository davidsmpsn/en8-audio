import * as React from 'react'
import Seo from '../components/seo'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { About } from '../components/about'
import { Projects } from '../components/projects'
import { Clients } from '../components/clients'
import { Contact } from '../components/contact'

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
        <Contact />

        <footer className="footer">
          &copy; EN8 Audio 2024
        </footer>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
