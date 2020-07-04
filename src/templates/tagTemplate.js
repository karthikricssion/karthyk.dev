import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo'

import BannerText from '../components/banner';
import WritingList from '../components/writings/SinglewritingList'

export default (props) => {
    
    return (
        <Layout>
            <SEO title={props.pageContext.tag}/>
            <BannerText pageHeading={props.pageContext.tag} />
            <WritingList writings={props.data.allMarkdownRemark.nodes} />
        </Layout>
  );
};

export const query = graphql`
    query($tag: String!) {
        sitePage {
            path
            context {
                tag
            }
        }

        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}, 
            filter: {frontmatter: {tags: {in: [$tag]}}, published: {eq: true} }, 
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
