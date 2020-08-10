import PropTypes from "prop-types"
import React from "react"
import { FaGithub, FaTwitter, FaFilePdf } from "react-icons/fa"
import { GrMail, GrLinkedin } from "react-icons/gr"

import Logo from "../logo"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle, linkedin, github, twitter, email }) => (
  <header className={headerStyles.siteHeader}>
    <Logo className={headerStyles.logo}>{siteTitle}</Logo>
    <ul className={headerStyles.socialBlock}>
      <li>
        <a
          aria-label="LinkedIn Profile"
          className={headerStyles.socialLink}
          target="_blank"
          rel="noreferrer"
          href={linkedin}
        >
          <GrLinkedin />
        </a>
      </li>
      <li>
        <a
          aria-label="Github Profile"
          className={headerStyles.socialLink}
          target="_blank"
          rel="noreferrer"
          href={github}
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          aria-label="Twitter Profile"
          className={headerStyles.socialLink}
          target="_blank"
          rel="noreferrer"
          href={twitter}
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          aria-label="Email address"
          className={headerStyles.socialLink}
          target="_blank"
          rel="noreferrer"
          href={`mailto:${email}`}
        >
          <GrMail />
        </a>
      </li>
      <li>
        <a
          aria-label="Download latest CV"
          className={headerStyles.socialLink}
          download
          href={`resume.pdf`}
        >
          <FaFilePdf />
        </a>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
