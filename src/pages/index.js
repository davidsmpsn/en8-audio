import * as React from 'react'
import '../style/main.scss'

const IndexPage = () => {
  const clientList = [
    'island-records',
    'independent',
    'national-geographic',
    'independent-venue-week',
    'ypsigrock',
    'mumford-and-sons',
    'keane',
    'honeyblood',
    'the-national'
  ]

  return (
    <div className='wrapper'>
      
      <div className='header'>
        <h1><a href=''>EN8 AUDIO</a></h1>
        <div className='header__nav'>
          <ul>
            <li><a href=''>Contact</a></li>
          </ul>
        </div>
      </div>

      <div className='hero'>
        <div className='hero__inner'>
          <h2>Setting a new standard in audio recording, mixing and production services in the commercial & creative domain.</h2>
        </div>
      </div>

      <div className='description1'>
        <p>We are an audio production house delivering the highest quality audio services on the market. London based, we are a team of over 30 years experience in the field with a wide range of experience in Video & TV production & in the commercial recorded music domain; trusted by some of the biggest recording artists and most established production companies alike.</p>
      </div>

      <div className='description2'>
        <p>Through open and easy communication, we offer reliable quality over a range of services that include but are not limited to; Location Recording such as filmed live sessions & acoustic sessions,  In-House Recording at our production house for high quality voiceover recording, and External Engineering services engineering any type of session at any high end recording studio (we’ve worked in them all).  Post-Production such as podcast editing, TV & Video production and Audio Repair services, and Mixing; we’re very well equipped to offer mix services of all kinds at a very high level.</p>
      </div>

      <div className='projects'>

      </div>

      <div className='clients'>
        {clientList.map(client => (
          <div className='clients__client'>
            <img src={`./client-logos/${client}.png`} alt='client' />
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
