import React from 'react'

export const Header = ({ handleOpen }) => {
  return (
    <header className="header">
      <h1>
        <img src="./logo.svg" alt="Playhead Audio" />
        Playhead Audio
      </h1>
      <div className="header__nav">
        <ul>
          <li><button onClick={handleOpen}>Contact</button></li>
        </ul>
      </div>
    </header>
  )
}