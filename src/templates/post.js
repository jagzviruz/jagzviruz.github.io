import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import parseISO from "date-fns/parseISO"
import format from "date-fns/format"
import { RiTwitterLine, RiFacebookBoxLine } from "react-icons/ri"

import { BaseLayout } from "../layout"
import SEO from "../components/seo"

import "katex/dist/katex.min.css"
import postStyles from "./post.module.scss"

export default ({ data, pageContext, location }) => {
  const {social} = data.site.siteMetadata;
  const post = data.markdownRemark
  const { title, tags = [], spoiler, date, keywords = [] } = post.frontmatter
  const { previous, next } = pageContext

  return (
    <BaseLayout>
      <SEO
        title={title}
        description={spoiler}
        keywords={keywords && keywords.filter(a => a.trim())}
      />
      <aside>
        <span className={postStyles.timeBlock}>
          Published on{" "}
          <time dateTime={date}>{format(parseISO(date), "MMMM dd, yyyy")}</time>
        </span>
      </aside>
      <h1>{title}</h1>

      <article
        className={postStyles.article}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <footer>
        <p>
          If you think somebody would benefit from reading this post, please
          share away and help me reach more people.
        </p>
        <div class="share-widgets">
          <a
            href={`//twitter.com/intent/tweet?original_referer=${location.href}&ref_src=twsrc%5Etfw&text=Found this post : "${title}" by ${social.twitterHandle}&tw_p=tweetbutton&url=${location.href}`}
            className="share-button twitter-share-button"
            target="_blank"
            rel="noreferrer"
          >
            <RiTwitterLine/>
            Tweet
          </a>
          <a
            href={`//www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=${location.href}&display=popup&ref=plugin&src=share_button`}
            className="share-button fb-share-button"
            target="_blank"
            rel="noreferrer"
          >
            <RiFacebookBoxLine/>
            Share
          </a>
        </div>
      </footer>
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
        {keywords && keywords.filter(a => a.trim()).length > 0 ? (
          <ul className="horizontal-list my-3">
            <li className="bold">Keywords : </li>
            {keywords.map(keyword => (
              <li key={keyword} className="pill">
                {keyword}
              </li>
            ))}
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
        date
        tags
        spoiler
        keywords
      }
    }
    site {
      siteMetadata {
        social {
          twitterHandle
        }
      }
    }
  }
`
