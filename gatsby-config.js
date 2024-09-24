/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Playhead Audio | Trusted audio solutions for  media and music`,
    description: `London based, we are a team with over 30 years experience in the field. Working across location sound, audio post-production and commercially recorded music; trusted by some of the biggest recording artists and most established production companies alike.`,
    author: `Tom Archer, David Simpson`,
    siteUrl: `https://www.playheadaudio.com`,
    keywords: `Audio Production Company, Location Recording Services London, Studio Recording London, Podcast Recording, Voiceover Recording, Audio Mixing Services, Post-Production Audio, On-Set Music Playback London, Audio Consultancy London, Music Video Production, Live Music Recording, Acoustic Session Recording, Audiobook Recording, Sound Engineering Services, Corporate Audio Solutions`
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Playhead Audio`,
        short_name: `Playhead Audio`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#1f1f1f`,
        display: `browser`,
        icon: `src/images/favicon.png`
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `cxqmzg7n`,
        dataset: `production`,
        graphqlTag: 'default'
      },
    },
  ]
};