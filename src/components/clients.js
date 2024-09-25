import React, { useEffect, useState, forwardRef } from 'react'
import { motion, animate, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'

export const Clients = forwardRef(({ clients }, ref) => {

  const FAST_DURATION = 60
  const SLOW_DURATION = 120

  const [duration, setDuration] = useState(FAST_DURATION)

  let [measureRef, { width }] = useMeasure()

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
  }, [xTranslation, width, duration, rerender, mustFinish])

  return (
    <div className="clients" ref={ref}>
      <motion.div
        className="clients__list"
        ref={measureRef}
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
      {[...clients, ...clients].map((client, index) => (
          <div className="clients__client" key={`${index}`}>
            <motion.img
              src={`./client-logos/${client}.svg`} alt={client}
              whileHover={{ scale: 1.1 }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
})