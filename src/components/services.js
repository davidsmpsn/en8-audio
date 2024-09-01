import React from 'react'
import { PortableText } from '@portabletext/react'

export const Services = ({ services }) => (
  <div className="services">
    <div className="wrapper">
       <div className="services__list">
        {services.map(service => (
          <div className="services__item" key={service.id}>
            <h4>{service.title}</h4>
            <div className="services__content">
              <div className="services__list">
                <p>{service.services}</p>
              </div>
              <div>
              <PortableText value={service._rawDescription} />
              </div>
            </div>
          </div>
        ))}
       </div>
    </div>
  </div>
)