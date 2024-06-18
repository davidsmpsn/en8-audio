/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `EN8 Audio`,
    description: `London based, we are a team with over 30 years experience in the field. Working across location sound, audio post-production and commercially recorded music; trusted by some of the biggest recording artists and most established production companies alike.`,
    author: `Tom Archer, David Simpson`,
    siteUrl: `https://www.en8audio.com`
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EN8 Audio`,
        short_name: `EN8 Audio`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#1f1f1f`,
        display: `browser`,
        icon: `src/images/favicon.png`
      },
    }
  ]
};