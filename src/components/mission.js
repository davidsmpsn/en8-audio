import React from 'react'

export const Mission = ({ handleOpen }) => (
  <div className="mission">
    <div className="wrapper">
      <div className="mission__inner">
        <div className="mission__item">
          <h1>Wherever you are, <br/> we've got your sound.</h1>
          <p>In-studio to on-location, mixing to post production &mdash; whatever you need, we make it happen.</p>
        </div>
        <div className="mission__item">
          <button className="button" onClick={handleOpen}>Get in touch</button>
        </div>
      </div>
    </div>
  </div>
)