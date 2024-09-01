import React from 'react'
import { PortableText } from '@portabletext/react'

export const Mission = ({ handleOpen, header, text }) => (
  <div className="mission">
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
)