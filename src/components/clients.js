import React, { useEffect } from 'react'
import { motion, animate, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'

export const Clients = ({ clients }) => {

  let [ref, { width }] = useMeasure()

  const xTranslation = useMotionValue(0)

  useEffect(() => {
    let controls
    let finalPosition = -width / 2 - 20

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 60,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    })

    return controls.stop
  }, [xTranslation, width])

  return (
    <div className="clients">
      <motion.div className="clients__list" ref={ref} style={{ x: xTranslation }}>
      {[...clients, ...clients].map(client => (
          <div className="clients__client">
            <img src={`./client-logos/${client}.svg`} alt="client" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}