import React, { useEffect, useState } from 'react'
import { motion, animate, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'

export const Clients = ({ clients }) => {

  const FAST_DURATION = 60
  const SLOW_DURATION = 100

  const [duration, setDuration] = useState(FAST_DURATION)

  let [ref, { width }] = useMeasure()

  const xTranslation = useMotionValue(0)

  const [mustFinish, setMustFinish] = useState(false)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    let controls
    let finalPosition = -width / 2 - 20

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        }
      }) 
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0
      })
    }


    return controls?.stop
  }, [xTranslation, width, duration, rerender])

  return (
    <div className="clients">
      <motion.div
        className="clients__list"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true)
          setDuration(SLOW_DURATION)
        }}
        onHoverEnd={() => {
          setMustFinish(true)
          setDuration(FAST_DURATION)
        }}
      >
      {[...clients, ...clients].map(client => (
          <div className="clients__client">
            <motion.img
              src={`./client-logos/${client}.svg`} alt={client}
              whileHover={{ scale: 1.1 }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}