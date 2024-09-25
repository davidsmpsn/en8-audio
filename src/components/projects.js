import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { motion, useMotionValue, useAnimation } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Projects = ({ projects, text }) => {
  const [imgIndex, setImgIndex] = useState(projects.length)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const extendedProjects = [...projects, ...projects, ...projects]

  const x = useMotionValue(0)
  const controls = useAnimation()

  let [measureRef, { width: projectWidth }] = useMeasure()

  useLayoutEffect(() => {
    const initialX = -(imgIndex * projectWidth + imgIndex * 32)
    x.set(initialX)
  }, [projectWidth, imgIndex, x])

  const handleSnapTo = useCallback(async (newIndex) => {
    if (isAnimating) return
    setIsAnimating(true)

    if (newIndex < projects.length) {
      await controls.start({
        x: -(newIndex * projectWidth - newIndex * -32),
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
        },
      })

      const equivalentIndex = newIndex + projects.length
      x.set(equivalentIndex * projectWidth - newIndex * -32)
      newIndex = equivalentIndex
    } else if (newIndex >= projects.length * 2) {
      await controls.start({
        x: -(newIndex * projectWidth - newIndex * -32),
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
        },
      })

      const equivalentIndex = newIndex - projects.length
      x.set(equivalentIndex * projectWidth - newIndex * -32)
      newIndex = equivalentIndex
    } else {
      const targetX = -(newIndex * projectWidth - newIndex * -32)
      controls.start({
        x: targetX,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
        },
      })
    }

    setImgIndex(newIndex)
    setIsAnimating(false)
  }, [isAnimating, controls, projects.length, projectWidth, x])

  const handleNavClick = useCallback((direction) => {
    if (isAnimating) return

    let newIndex = imgIndex + direction
    handleSnapTo(newIndex)
  }, [imgIndex, isAnimating, handleSnapTo])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isHovered && !isAnimating) {
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
  }, [imgIndex, isHovered, isAnimating, handleNavClick])

  const onDragEnd = (event, info) => {
    if (isAnimating) return

    const dragDistance = info.offset.x
    const threshold = projectWidth / 4

    if (dragDistance < -threshold) {
      handleNavClick(1)
    } else if (dragDistance > threshold) {
      handleNavClick(-1)
    } else {
      handleSnapTo(imgIndex)
    }
  }

  return (
    <div className="projects">
      <div 
        className="wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
          {extendedProjects.map((project, index) => (
            <div className="projects__project" ref={measureRef} key={`${project.id}-${index}`}>
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
          <button onClick={() => handleNavClick(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF" aria-labelledby="left">
              <title id="left">Left</title>
              <path d="m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z"/>
            </svg>
          </button>
          <button onClick={() => handleNavClick(1)}>
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
