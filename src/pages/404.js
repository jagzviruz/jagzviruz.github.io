import React from "react"

import { BaseLayout } from "../layout"
import SEO from "../components/seo"

import StopItGIF from "./stop-it.gif"
import styles from "./404.module.scss"

const NotFoundPage = () => (
  <BaseLayout>
    <SEO title="404: Not found" />
    <h1>WOAH !!!!</h1>
    <p>Stop trying to get into my private stuff ...</p>
    <img
      src={StopItGIF}
      className={styles.gif}
      alt="Bear slapping another asking it to stop doing it" />
  </BaseLayout>
)

export default NotFoundPage
