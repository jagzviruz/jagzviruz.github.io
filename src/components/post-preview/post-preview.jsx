import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

import previewStyles from "./post-preview.module.scss"

const PostPreview = ({ title, slug, spoiler, date, tags }) => (
  <article className={previewStyles.article}>
    <time dateTime={date}>{format(parseISO(date),'MMM dd, yyyy')}</time>
    <h3 article="heading">{title}</h3>
    <aside>
      {tags && tags.length > 0
        ? tags.map(tag => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))
        : null}
    </aside>
    <section role="note">{spoiler}</section>
    <AniLink
      duration={0.7}
      fade
      className={previewStyles.link}
      to={slug}
    >
      Read &#8594;
    </AniLink>
  </article>
)

export default PostPreview
