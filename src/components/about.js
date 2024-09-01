import React from 'react'
import { PortableText } from '@portabletext/react'
import { GatsbyImage } from 'gatsby-plugin-image'

export const About = ({ header, text, images }) => (
  <div className="about">
    <div className="wrapper">
      <div className="about__inner">
        <div className="about__imgs">
          {images.map(image => (
            <div className="about__img" key={image.asset.assetId}>
              <GatsbyImage
                image={image.asset.gatsbyImageData}
                draggable="false"
                alt="Playhead Audio"
              />
            </div>
          ))}
        </div>
        <div className="about__text">
          <h2>{header}</h2>
          <PortableText value={text} />
        </div>
      </div>
    </div>
  </div>
)