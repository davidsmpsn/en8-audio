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
    hidden: { y: 20, opacity: 0 }
  }

  return (
    <div className="hero">
      <motion.div
        className="hero__inner"
        initial="hidden"
        animate="visible"
        variants={group}
      >
        <motion.h2
          variants={item}
        >
          <span>Audio recording, mixing and production </span>
          <span>in the commercial & creative domain.</span>
        </motion.h2>
        <motion.a
          href="contact"
          className="button"
          variants={item}
        >
          Get In Touch
          </motion.a>
      </motion.div>
    </div>
  )
}