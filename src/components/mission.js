import React from 'react'

export const Mission = ({ handleOpen }) => (
  <div className="mission">
    <div className="wrapper">
      <div className="mission__inner">
        <div className="mission__item">
          <h1>Wherever you are, <br/> we've got your sound.</h1>
          <p>Trusted by some of the biggest recording artists and most established production companies alike.</p>
        </div>
        <div className="mission__item">
          <p>Let us help you achieve your vision.</p>
          <button className="button" onClick={handleOpen}>Get in touch</button>
        </div>
      </div>
    </div>
  </div>
)