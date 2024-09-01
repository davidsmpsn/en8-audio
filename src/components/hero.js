import React from 'react'
import { motion } from 'framer-motion'

export const Hero = () => {
  const group = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: .2
      }
    },
    hidden: {
      opacity: 0,
      transition: { when: 'afterChildren' }
    }
  }

  const item = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 }
    },
    hidden: { opacity: 0 }
  }

  return (
      <motion.div
        className="hero"
        initial="hidden"
        animate="visible"
        variants={group}
      >
        <img src="./logo.svg" alt="Playhead Audio" />
      </motion.div>
  )
}