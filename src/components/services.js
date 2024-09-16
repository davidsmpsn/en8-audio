import React, { useState, useEffect, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'

// Individual service component memoized to avoid unnecessary re-renders
const ServiceItem = memo(({ service, isSelected, handleClick }) => {
  return (
    <div className={`services__item ${isSelected === service.id && 'open'}`}>
      {isSelected === service.id && (
        <motion.div
          className="services__overlay"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{ pointerEvents: "auto" }}
          onClick={() => handleClick('')} // Click overlay to close
        >
        </motion.div>
      )}
      <div className="services__inner">
        <motion.div
          className="services__content"
          layout
          transition={{ layout: { type: 'spring', stiffness: 200, damping: 30 }}}
          onClick={() => handleClick(service.id)}
        >
          <motion.img layout="position" className="services__icon" src={`${service.icon}.svg`} />
          <motion.h4 layout="position">{service.title}</motion.h4>
          <motion.p layout="position"><PortableText value={service._rawServices} /></motion.p>

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

          <motion.button
            className="services__button"
            layout="position"
            onClick={() => handleClick(service.id)}
          >
            +
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
})

export const Services = ({ services }) => {
  const [isSelected, setIsSelected] = useState('')

  // Memoize handleClick to prevent re-creation on every render
  const handleClick = useCallback((serviceId) => {
    serviceId === isSelected ? setIsSelected('') : setIsSelected(serviceId)
  }, [isSelected])

  useEffect(() => {
    if (isSelected) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when a service is open
    } else {
      document.body.style.overflow = ''; // Re-enable scrolling when no service is selected
    }

    return () => {
      document.body.style.overflow = ''; // Clean up on unmount
    };
  }, [isSelected]);

  return (
    <div className="services">
      <div className="wrapper">
        <div className="services__list">
          {services.map(service => (
            <ServiceItem
              key={service.id}
              service={service}
              isSelected={isSelected}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
