import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useAnimation } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Projects = ({ projects, text }) => {
  const [imgIndex, setImgIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false) // To track if the carousel is hovered

  const x = useMotionValue(0)
  const controls = useAnimation()

  let [ref, { width: projectWidth }] = useMeasure()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isHovered) {  // Only respond to arrow keys when hovered
        if (e.key === 'ArrowLeft') {
          handleNavClick(-1)
        } else if (e.key === 'ArrowRight') {
          handleNavClick(1)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [imgIndex, isHovered])  // Re-run when the image index or hover state changes

  const onDragEnd = (event, info) => {
    const velocity = info.velocity.x
    const finalPosition = x.get() + velocity / 2
    const closestIndex = findClosestProject(finalPosition, projectWidth)
    const targetX = -(closestIndex * projectWidth - closestIndex * -32)

    controls.start({
      x: targetX,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }
    })

    setImgIndex(closestIndex)
  }

  const findClosestProject = (finalPosition, containerWidth) => {
    const offsets = projects.map((_, index) => {
      return Math.abs(finalPosition + index * containerWidth)
    })

    return offsets.indexOf(Math.min(...offsets))
  }

  const handleNavClick = (direction) => {
    let newIndex = imgIndex + direction
    newIndex = Math.max(0, Math.min(newIndex, projects.length - 1))

    const targetX = -(newIndex * projectWidth - newIndex * -32)

    controls.start({
      x: targetX,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }
    })

    setImgIndex(newIndex)
  }

  return (
    <div className="projects">
      <div 
        className="wrapper"
        onMouseEnter={() => setIsHovered(true)}  // Start listening for keys on hover
        onMouseLeave={() => setIsHovered(false)} // Stop listening for keys when not hovered
      >
        <motion.div
          className="projects__inner"
          drag="x"
          dragConstraints={{ right: 0 }}
          dragElastic={false}
          style={{ x }}
          animate={controls}
          onDragEnd={onDragEnd}
        >
          {projects.map(project => (
            <div className="projects__project" ref={ref} key={project.id}>
              <a href={project.link} target="_blank" rel="noreferrer" draggable="false">
                <GatsbyImage
                  image={project.image.asset.gatsbyImageData}
                  alt={project.client + ' - ' + project.project}
                  draggable="false"
                />
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="m243-192-51-51 429-429H384v-72h360v360h-72v-237L243-192Z"/></svg>
                <div className='projects__project-text'>
                  <h3>{project.project}</h3>
                  <p>{project.client}</p>
                </div>
              </a>
            </div>
          ))}
        </motion.div>

        <div className="projects__nav">
          <button onClick={() => handleNavClick(-1)} disabled={imgIndex === 0}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF" aria-labelledby="left">
              <title id="left">Left</title>
              <path d="m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z"/>
            </svg>
          </button>
          <button onClick={() => handleNavClick(1)} disabled={imgIndex === projects.length - 1}>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF" aria-labelledby="right">
            <title id="right">Right</title>
            <path d="M673-446.67H160v-66.66h513l-240-240L480-800l320 320-320 320-47-46.67 240-240Z"/>
          </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
