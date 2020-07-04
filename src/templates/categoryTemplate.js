import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import BannerText from '../components/banner';
import WritingList from '../components/writings/SinglewritingList'

export default (props) => {
    
    return (
        <Layout>
            <SEO title={props.pageContext.category}/>
            <BannerText pageHeading={props.pageContext.category} />
            <WritingList writings={props.data.allMarkdownRemark.nodes} />
        </Layout>
  );
};

export const query = graphql`
    query($category: String!) {
        sitePage {
            path
            context {
                category
            }
        }

        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}, 
            filter: {frontmatter: {category: {eq: $category}}, published: {eq: true}}
        ) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                }
                excerpt(pruneLength: 300)
                timeToRead
            }
        }
    }
`
