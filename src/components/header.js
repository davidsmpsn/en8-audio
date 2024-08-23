import React from 'react'

export const Header = ({ handleOpen }) => {
  return (
    <header className="header">
      <h1><a href="">Playhead Audio</a></h1>
      <div className="header__nav">
        <ul>
          <li><button onClick={handleOpen}>Contact</button></li>
        </ul>
      </div>
    </header>
  )
}