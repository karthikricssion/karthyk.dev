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
                            category
                        }
                    }
                }
            }
        }
      
    `)
    
    // creating tag pages and assigning template
    const tagSet = new Set();    
    const categorySet = new Set();    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach((tag) => {
                tagSet.add(tag);
            });
        }

        if (node.frontmatter.category) {
            categorySet.add(node.frontmatter.category)
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

    // creating Category pages and assigning template
    const categoryList = Array.from(categorySet);
    categoryList.forEach((category) => {
        createPage({
            path: `/writings/category/${_.kebabCase(category)}/`,
            component: path.resolve(`./src/templates/categoryTemplate.js`),
            context: {
                category,
            },
        });
    });
}