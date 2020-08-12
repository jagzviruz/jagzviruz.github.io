const path = require(`path`)
const { postsPerPage } = require(`./config/settings`)
const formatISO = require( 'date-fns/formatISO');
exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const slug = node.frontmatter.slug
    const { createNodeField } = actions

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const Post = path.resolve(`./src/templates/post.js`)
  const PostIndex = path.resolve(`./src/templates/all.js`)
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: node.fields.slug,
      component: Post,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        previous,
        next,
      },
    })
  })

  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/posts-list.js"),
      context: {
        skip: i * postsPerPage,
        limit: postsPerPage,
        numPages,
        currentPage: i + 1,
        currentDate: formatISO(new Date(), 'yyyy-mm-ddThh:mm')
      },
    })
  })
}
