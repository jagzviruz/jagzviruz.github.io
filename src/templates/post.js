import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { BaseLayout } from "../layout"
import SEO from "../components/seo"

import "katex/dist/katex.min.css"
import postStyles from "./post.module.scss"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { title, tags = [], spoiler, date, keywords = [] } = post.frontmatter
  const { previous, next } = pageContext

  return (
    <BaseLayout>
      <SEO
        title={title}
        description={spoiler}
        keywords={keywords && keywords.filter( a => a.trim()) }
      />
      <aside>
        <span className={postStyles.timeBlock}>
          Published on <time>{date}</time>
        </span>
      </aside>
      <h1>{title}</h1>

      <article
        className={postStyles.article}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <footer>
        {tags.length > 0 ? (
          <ul className="horizontal-list my-3">
            <li className="bold">Tags : </li>
            {tags
              ? tags.map(tag => (
                  <li key={tag} className="pill">
                    {tag}
                  </li>
                ))
              : null}
          </ul>
        ) : null}
        {keywords && keywords.filter( a => a.trim()).length > 0 ? (
          <ul className="horizontal-list my-3">
            <li className="bold">Keywords : </li>
            {
              keywords.map(keyword => (
                <li key={keyword} className="pill">
                  {keyword}
                </li>
              ))
            }
          </ul>
        ) : null}
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <AniLink fade duration={0.3} to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </AniLink>
            )}
          </li>
          <li>
            {next && (
              <AniLink fade duration={0.3} to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </AniLink>
            )}
          </li>
        </ul>
      </footer>
    </BaseLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        spoiler
        keywords
      }
    }
  }
`
