import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import md5 from "md5"

import { BaseLayout } from "../layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"
import { rhythm } from "../utils/typography"
import IndexStyles from './post-list.module.scss';

const AllPosts = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const title = data.site.siteMetadata.title
  const { currentPage, numPages } = pageContext

  return (
    <BaseLayout>
      <SEO title={title} />
      <ul className={`unstyled ${IndexStyles.fillArea}`}>
        {posts.map(({ node }) => (
          <li key={md5(node.fields.slug)}>
            <PostPreview {...node.frontmatter} {...node.fields} />
          </li>
        ))}
      </ul>
      {numPages > 1 ? (
        <ul className="horizontal-list pagination">
          {Array.from({ length: numPages }, (_, i) => (
            <li key={`pagination-number${i + 1}`}>
              <AniLink
                paintDrip
                hex="#E2E8F0"
                className="page-link"
                to={`/${i === 0 ? "" : i + 1}`}
                style={{
                  padding: rhythm(1 / 4),
                  textDecoration: "none",
                  color: i + 1 === currentPage ? "#ffffff" : "",
                  background: i + 1 === currentPage ? "#007acc" : "",
                }}
              >
                {i + 1}
              </AniLink>
            </li>
          ))}
        </ul>
      ) : null}
    </BaseLayout>
  )
}

export const query = graphql`
  query blogPosts($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(fromNow: true)
            spoiler
            tags
            title
          }
        }
      }
    }
  }
`

export default AllPosts
