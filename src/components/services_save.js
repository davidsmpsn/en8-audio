import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'

export const Services = ({ services }) => {
  const [isSelected, setIsSelected] = useState({})

  const openSpring = { type: "spring", stiffness: 200, damping: 30 };
  const closeSpring = { type: "spring", stiffness: 300, damping: 35 };


  const handleClick = (service) => {
    setIsSelected(service)
  }

  return (
    <div className="services">
      <div className="wrapper">
        <div className="services__top">
          <h2>Services</h2>
        </div>
        <div className="services__list">
          {services.map(service => (
            <div className={`services__service ${isSelected === service.id && 'open'}`}>
              {/* <motion.div
                className="services__overlay"
                initial={false}
                animate={{ opacity: isSelected === service.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ pointerEvents: isSelected === service.id ? "auto" : "none" }}
              >
              </motion.div> */}
              <div className="services__inner">
                <motion.div
                  className={`services__content ${isSelected === service.id && 'open'}`}
                  key={service.id}
                  layout
                >
                  <motion.img layout="position" className="services__icon" src="fader.svg" />
                  <motion.h4 layout="position">{service.title}</motion.h4>
                  <motion.p layout="position">Mixing, mastering, other stuff etc.</motion.p>
                  <button
                    onClick={() => handleClick(service.id)}
                    className="services__button"
                  >
                  </button>
                  {isSelected === service.id && (
                  <motion.div
                    className="services__text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <PortableText value={service._rawDescription} />
                  </motion.div>
                )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}