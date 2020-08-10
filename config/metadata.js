const NAME = "Developer Name"
const SITE_NAME = "Developer Name"
const DESCRIPTION = "A description" // Alternative Site title for SEO
const MINI_BIO = `
<strong>${NAME}</strong> is a developer and this is a short bio.
`
const SHORT_NAME = "developername" // short_name for manifest
const SITE_URL = "http://localhost:8000/" // Domain of your site. No trailing slash!
const ORG = "Org Name"

const TWITTER = "twitter"
const GITHUB = "github"
const LINKED_IN_SHORTNAME = "linkedin"
const EMAIL = "username@email"

const GOOGLE_ANALYTICS_TRACKING_ID = ""

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
  siteDescription:
    "These are the personal notes of Jagadish, K. as he navigates this comp[lex world of web development",
  minibio: MINI_BIO,
  author: NAME,
  organization: ORG,

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  ogSiteName: SITE_NAME, // Facebook Site Name
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
