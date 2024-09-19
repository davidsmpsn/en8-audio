import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
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
          assetId
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
    allSanityService(sort: {orderRank: ASC}) {
      edges {
        node {
          id
          title
          icon
          _rawServices
          _rawDescription
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const [isOpen, setOpen] = useState(false)
  const [showArrow, setShowArrow] = useState(true)

  const handleOpen = (status) => {
    setOpen(status)
    if (status) {
      scrollToTop()
      setShowArrow(false)
    } else {
      setShowArrow(true)
    }

  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const nextSectionRef = useRef(null)

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setShowArrow(true)
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const projects = data.allSanityProject.edges.map(project => project.node)
  const services = data.allSanityService.edges.map(service => service.node)

  return (
    <div>
      <div className="page_top">
        <video autoPlay={true} muted={true} loop={true} playsInline={true} id="myVideo">
          <source src={data.sanityHome.showreel.asset.url} type="video/webm"/>
        </video>
        <Contact isOpen={isOpen} handleOpen={handleOpen} />
        <div className="wrapper">
          <Header handleOpen={handleOpen} isOpen={isOpen} />
          <Hero />
          <div className={`${!showArrow || isOpen ? 'hide': ''} scroll-arrow`}>
            <motion.a 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToNextSection}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368">
                <path d="M446.67-800v513l-240-240L160-480l320 320 320-320-46.67-47-240 240v-513h-66.66Z"/>
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      <Mission ref={nextSectionRef} handleOpen={handleOpen} header={data.sanityHome.missionHead} text={data.sanityHome._rawMissionText} />
      <Clients clients={clients} />
      <Projects projects={projects} text={data.sanityHome._rawProjectsText} />
      <Services services={services} />
      {/* <About header={data.sanityHome.teamHeader} text={data.sanityHome._rawTeamText} images={data.sanityHome.teamImages}/> */}
      <Footer handleOpen={handleOpen} text={data.sanityHome._rawTeamText} />
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
