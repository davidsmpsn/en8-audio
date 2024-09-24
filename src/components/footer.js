import React from 'react'
import { PortableText } from '@portabletext/react'

export const Footer = ({ handleOpen, text }) => (
  <footer className="footer">
    <div className="wrapper">
      <div className="footer__section">
        <div className="footer__text">
          <PortableText value={text} />
        </div>
        <button className="button button-sm" onClick={handleOpen}>Get in touch</button>
      </div>
      <div className="footer__section">
        <p><a href="mailto:enquiries@playheadaudio.com">enquiries@playheadaudio.com</a></p>
        <div className="footer__socials">
          <a href="https://www.instagram.com/playheadaudio/" className="icon-instagram">Instagram</a>
          <a href="https://www.linkedin.com/company/playheadaudio/" className="icon-linkedin">LinkedIn</a>
        </div>
        <p>&copy; Playhead Audio 2024</p>
      </div>
    </div>
  </footer>
)