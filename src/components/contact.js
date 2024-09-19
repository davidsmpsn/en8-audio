import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Contact = ({ isOpen, handleOpen }) => {
  const [copyStatus, setCopyStatus] = useState('Copy')

  const copyToClipboard = (text, e) => {
    navigator.clipboard.writeText(text)
    setCopyStatus('Copied!')
    setTimeout(() => setCopyStatus('Copy'), 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="overlay"
        >
          <div className="overlay__text">
            <div className="overlay__clipboard">
              <h3 
                onClick={(e) => copyToClipboard('enquiries@playheadaudio.com', e)} 
                style={{ cursor: 'pointer' }}
              >
                enquiries@playheadaudio.com
              </h3>
              <button onClick={() => copyToClipboard('enquiries@playheadaudio.com')}>
                {copyStatus}
              </button>
            </div>
          </div>
          <div className="overlay__trigger" onClick={() => handleOpen(false)}></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
