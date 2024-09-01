import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ lang, title, description, meta, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <title>{site.siteMetadata?.title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={site.siteMetadata.keywords} />
      <meta property="og:title" content={site.siteMetadata?.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.author || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  title: ``,
  description: ``,
  meta: []
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
