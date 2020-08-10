import React from "react"
import { Link } from "gatsby"
import { FaCode } from "react-icons/fa"

import logoStyles from "./logo.module.scss"

export default ({ children, className }) => (
  <Link
    to="/"
    className={`${className} ${logoStyles.logo}`}
  >
    <span className={logoStyles.glyph}>
      <FaCode />
    </span>
    <span className={logoStyles.logoText}>{children}</span>
  </Link>
)
