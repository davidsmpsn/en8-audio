import * as React from 'react'
import { useState } from 'react'
import { graphql } from 'gatsby'
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

import { clients } from '../data/clients'

export const query = graphql`
  query {
    allSanityProject(sort: {orderRank: ASC}) {
      edges {
        node {
          id
          project
          client
          link
          image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
        }
      }
    }
    sanityHome {
      showreel {
        asset {
          url
        }
      }
      missionHead
      _rawMissionText
      _rawProjectsText
      teamHeader
      _rawTeamText
      teamImages {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
    allSanityService(sort: {orderRank: ASC}) {
      edges {
        node {
          id
          title
          services
          _rawDescription
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const [isOpen, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const projects = data.allSanityProject.edges.map(project => project.node)
  const services = data.allSanityService.edges.map(service => service.node)

  return (
    <div>
      <div className="page_top">
        <video autoPlay={true} muted={true} loop={true} playsInline={true} id="myVideo">
          <source src={data.sanityHome.showreel.asset.url} type="video/webm"/>
        </video>
        <div className="wrapper">
          <Header handleOpen={handleOpen} />
          <Hero />
        </div>
      </div>

      <Mission handleOpen={handleOpen} header={data.sanityHome.missionHead} text={data.sanityHome._rawMissionText} />
      <Clients clients={clients} />

      <Projects projects={projects} text={data.sanityHome._rawProjectsText} />
      <Services services={services} />
      <About header={data.sanityHome.teamHeader} text={data.sanityHome._rawTeamText} images={data.sanityHome.teamImages}/>
      
      <Contact isOpen={isOpen} handleClose={handleClose}/>
      <Footer />
      
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
