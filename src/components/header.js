import React from 'react'

export const Header = ({ handleOpen, isOpen }) => {
  return (
    <header className="header">
      <div className="header__nav">
        <ul>
          <li>
          <button
            className={`${isOpen && 'header__button-open'}`}
            onClick={() => handleOpen(!isOpen)}
          >
            {isOpen ? 'Close' : 'Contact'}
          </button>
          </li>
        </ul>
      </div>
    </header>
  )
}