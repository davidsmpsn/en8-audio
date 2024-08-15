import * as React from 'react'
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
  return (
    <div>
      <div className="page_top">
        <video autoPlay={true} muted={true} loop={true} playsinline={true} id="myVideo">
          <source src="./showreel.mp4" type="video/mp4"/>
        </video>
        <div className="wrapper">
          <Header />
          <Hero />
        </div>
      </div>

      <Mission />
      <Clients clients={clients} />

      <Projects projects={projects} />
      <Services />
      <About />        
      
      {/* <Contact /> */}
      <Footer />
      
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
