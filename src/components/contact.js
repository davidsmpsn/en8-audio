import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Contact = ({ isOpen, handleOpen }) => {

  const copy = (e) => {
    navigator.clipboard.writeText('enquiries@playheadaudio.com')
    e.target.innerText = 'Copied!'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5 }}
          exit={{ opacity: 0 }}
          className="overlay"
        >
          <div className="overlay__text">
            <div className="overlay__clipboard">
              <h3>enquiries@playheadaudio.com</h3>
              <button onClick={copy}>Copy</button>
            </div>
          </div>
          <div className="overlay__trigger" onClick={() => handleOpen(false)}></div>
        </motion.div>
      )}
    </AnimatePresence>
)}