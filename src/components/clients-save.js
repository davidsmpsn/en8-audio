import React from 'react'

export const Clients = ({ music, companies }) => (
  <div className="clients">
    <div className="clients__list">
    {music.map(client => (
        <div className="clients__client">
          <img src={`./client-logos/music/${client}.svg`} alt="client" />
        </div>
      ))}
    </div>
    <div className="clients__list">
      {companies.map(client => (
        <div className="clients__client">
          <img src={`./client-logos/companies/${client}.svg`} alt="client" />
        </div>
      ))}
    </div>
  </div>
)