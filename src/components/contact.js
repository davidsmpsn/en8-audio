import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Contact = ({ isOpen, handleClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .5 }}
        exit={{ opacity: 0 }}
        className="overlay"
      >
        <div className="overlay__close">
          <button onClick={handleClose}>X</button>
        </div>
        <div className="overlay__text">
          <h3>enquiries@playheadaudio.com</h3> 
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)