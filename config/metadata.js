const NAME = "Jagadish, K."
const SITE_NAME = "Jagadish, K."
const DESCRIPTION = "Musings of an old Javascript developer named Jagadish, K." // Alternative Site title for SEO
const MINI_BIO = `Jagadish, K. is a Software engineer and has been working on websites since 2008.He enjoys building web-applications and playing with the various shiny tools in the world of Javascript.He likes to document his learnings so they can show the way for others as well as serve as a reminder for himself.`
const SHORT_NAME = "jagadishk" // short_name for manifest
const SITE_URL = "https://jagadishk.dev" // Domain of your site. No trailing slash!
const ORG = "LinkedIn"

const TWITTER = "jagzviruz"
const GITHUB = "jagzviruz"
const LINKED_IN_SHORTNAME = "kjagdish"
const EMAIL = "k.jagdish+website@gmail.com"

const GOOGLE_ANALYTICS_TRACKING_ID = "UA-175186452-1"

module.exports = {
  title: NAME,
  name: NAME,
  description: DESCRIPTION,
  short_name: SHORT_NAME,
  siteUrl: SITE_URL,
  lang: "en", // Language Tag on <html> element
  pathPrefix: "/",
  headshot: "images/headshot.jpg",
  siteLogo: "images/logo.png", // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription: "These are the personal notes of Jagadish, K. as he navigates this complex world of web development",
  minibio: MINI_BIO,
  author: NAME,
  organization: ORG,

  ogSiteName: SITE_NAME,
  ogLanguage: "en_US",

  // Manifest and Progress color
  themeColor: "#4147DC",
  backgroundColor: "#231C42",

  // Social component
  twitter: `https://twitter.com/${TWITTER}/`,
  twitterHandle: `@${TWITTER}`,
  github: `https://github.com/${GITHUB}/`,
  linkedin: `https://www.linkedin.com/in/${LINKED_IN_SHORTNAME}/`,
  email: EMAIL,

  // Tracking Related
  googleAnalyticsTrackingId: GOOGLE_ANALYTICS_TRACKING_ID,
}
