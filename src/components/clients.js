import React, { useEffect, useState } from 'react'
import { motion, animate, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'

export const Clients = ({ clients }) => {

  const SCROLL_DURATION = 60

  const [duration, setDuration] = useState(SCROLL_DURATION)
  const [play, setPlay] = useState(true)

  let [ref, { width }] = useMeasure()

  const xTranslation = useMotionValue(0)

  const [mustFinish, setMustFinish] = useState(false)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    let controls
    let finalPosition = -width / 2 - 20

    if (!play) {
      // Pause animation
      if (controls) {
        controls.stop() 
      }
      return // Exit the useEffect if play is false
    }

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
  }, [xTranslation, width, duration, rerender, play, mustFinish])

  return (
    <div className="clients">
      <motion.div
        className="clients__list"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true)
          setPlay(false)
        }}
        onHoverEnd={() => {
          setMustFinish(true)
          setPlay(true)
        }}
      >
      {[...clients, ...clients].map(client => (
          <motion.div className="clients__client" whileHover={{ scale: 1.1 }}>
            <img src={`./client-logos/${client}.svg`} alt={client} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}