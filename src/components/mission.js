import React, { forwardRef } from 'react'
import { PortableText } from '@portabletext/react'

export const Mission = forwardRef(({ handleOpen, header, text }, ref) => (
  <div className="mission" ref={ref}>
    <div className="wrapper">
      <div className="mission__inner">
        <div className="mission__item">
          <h1>{header}</h1>
        </div>
        <div className="mission__item">
          <PortableText value={text} />
          <button className="button" onClick={handleOpen}>Get in touch</button>
        </div>
      </div>
    </div>
  </div>
))
