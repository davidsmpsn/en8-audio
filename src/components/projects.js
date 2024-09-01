import React, { useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PortableText } from '@portabletext/react'

export const Projects = ({ projects, text }) => {
  const [imgIndex, setImgIndex] = useState(0)

  const dragX = useMotionValue(0)

  let [ref, { width }] = useMeasure()

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -50 && imgIndex < projects.length - 1) {
      setImgIndex((pv) => pv + 1)
    } else if ( x >= 50 && imgIndex > 0) {
      setImgIndex((pv) => pv - 1)
    }
  }

  return (
    <div className="projects">
      <div className="wrapper">
        <div className="projects__top">
          <div className="projects__text">
            <PortableText value={text} />
          </div>

          
        </div>

        <motion.div
          className="projects__inner"
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0
          }}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
          dragElastic={1}
          style={{
            x: dragX,
            
          }}
          animate={{
            translateX: `-${imgIndex * width + imgIndex * 32}px`
          }}
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
            <button onClick={() => imgIndex > 0 ? setImgIndex((pv) => pv - 1) : null}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF" aria-labelledby="left">
                <title id="left">Left</title>
                <path d="m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z"/>
              </svg>
            </button>
            <button onClick={() => imgIndex < projects.length - 1 ? setImgIndex((pv) => pv + 1 ) : null}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF" aria-labelledby="right">
              <title id="right">Right</title>
              <path d="M673-446.67H160v-66.66h513l-240-240L480-800l320 320-320 320-47-46.67 240-240Z"/>
            </svg>
            </button>
          </div>
      </div>
    </div>
)}