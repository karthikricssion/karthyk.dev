const path = require(`path`)
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if(node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent)
        const slug = createFilePath({ node, getNode, basePath: `writings` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
          })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query MyBlogList {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            tags
                            slug
                        }
                    }
                }
            }
        }
      
    `)
    
    const tagSet = new Set();
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach((tag) => {
                tagSet.add(tag);
            });
        }

        createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`./src/templates/writtingTemplate.js`),
            context: {
                slug: node.frontmatter.slug,
            },
        })
    })

    const tagList = Array.from(tagSet);
    tagList.forEach((tag) => {
        createPage({
            path: `/writings/tags/${_.kebabCase(tag)}/`,
            component: path.resolve(`./src/templates/tagTemplate.js`),
            context: {
                tag,
            },
        });
    });
}