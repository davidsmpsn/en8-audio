import * as React from 'react'
import { useState } from 'react'
import Seo from '../components/seo'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { Mission } from '../components/mission'
import { About } from '../components/about'
import { Projects } from '../components/projects'
import { Services } from '../components/services'
import { Clients } from '../components/clients'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'

import '../style/main.scss'

import { projects } from '../data/projects'
import { clients } from '../data/clients'

const IndexPage = () => {
  const [isOpen, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <div className="page_top">
        <video autoPlay={true} muted={true} loop={true} playsinline={true} id="myVideo">
          <source src="./showreel.webm" type="video/webm"/>
        </video>
        <div className="wrapper">
          <Header handleOpen={handleOpen} />
          <Hero />
        </div>
      </div>

      <Mission handleOpen={handleOpen} />
      <Clients clients={clients} />

      <Projects projects={projects} />
      <Services />
      <About />        
      
      <Contact isOpen={isOpen} handleClose={handleClose}/>
      <Footer />
      
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
