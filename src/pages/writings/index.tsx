import React from "react";
import { graphql, Link } from 'gatsby';

import Dump from '../../components/Dump';
import Layout from '../../components/layout';
import SEO from "../../components/seo"

const WrittingsListPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="Writings" />
            {data.allMarkdownRemark.nodes.map(({ frontmatter, timeToRead } , index ) => (
                <div>
                  <Link to={frontmatter.slug} key={index}>{frontmatter.title}</Link>
                </div>
            ))}
        </Layout>
    )
  }

  export default WrittingsListPage
  

export const query = graphql`
query TagsList {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "D MMMM YYYY")
          slug
          title
        }
        excerpt(pruneLength: 100)
        timeToRead
      }
    }
  }
`