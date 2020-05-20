import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
    
    return (
        <Layout>
            {data.allMarkdownRemark.nodes.map(({ frontmatter } , index ) => (
                <div>
                    <Link to={frontmatter.slug} key={index}>{frontmatter.title}</Link>
                </div>
            ))}
        </Layout>
  );
};

export const query = graphql`
    query($tag: String!) {
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}, 
            filter: {frontmatter: {tags: {in: [$tag]}}}
        ) {
            nodes {
                html
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    tags
                    slug
                    author {
                        name
                        url
                    }
                }
                timeToRead
            }
        }
    }
`
