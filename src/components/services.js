import React, { useState, useEffect, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'

const useMediaQuery = (width) => {
  const [matches, setMatches] = useState(window.innerWidth <= width);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setMatches(window.innerWidth <= width);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return matches;
}

const ServiceItem = memo(({ service, isSelected, handleClick }) => {
  // Use the custom hook to detect mobile screen size
  const isMobile = useMediaQuery(768);

  return (
    <div className={`services__item ${isSelected === service.id && 'open'}`}>
      {isSelected === service.id && (
        <motion.div
          className="services__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{ pointerEvents: "auto" }}
          onClick={() => handleClick('')} // Click overlay to close
        />
      )}
      <div className="services__inner">
        <motion.div
          className="services__content"
          layout={!isMobile}
          transition={{ layout: { type: 'spring', stiffness: 200, damping: 30 }}}
          onClick={() => handleClick(service.id)}
        >
          <img className="services__icon" src={`${service.icon}.svg`} alt={service.title} />
          <motion.h4 layout={!isMobile ? 'position' : false}>{service.title}</motion.h4>
          <motion.p layout={!isMobile ? 'position' : false}><PortableText value={service._rawServices} /></motion.p>

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
            layout={!isMobile ? 'position' : false}
            animate={{ rotate: isSelected === service.id ? 45 : 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.5, ease: 'easeInOut' }}
          >
            +
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
});

export const Services = ({ services }) => {
  const [isSelected, setIsSelected] = useState('');

  const handleClick = useCallback((serviceId) => {
    setIsSelected(prevId => prevId === serviceId ? '' : serviceId);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSelected ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
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
