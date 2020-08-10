/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../components/header"
import baseStyles from "./base.module.css"

const Layout = ({ slug, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author {
            minibio
            name
          }
          social {
            twitter
            email
            github
            linkedin
            twitterHandle
          }
          description
          canonicalUrl
        }
      }
    }
  `)

  return (
      <>
      <div
        className={baseStyles.container}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          {...data.site.siteMetadata.social}
          />
        <main className={baseStyles.mainContent}>{children}</main>
      </div>
      </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
