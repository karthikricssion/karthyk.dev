import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import WritingDetail from '../components/writings/writingDetail';

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <section className="container no-padding">
                <WritingDetail post={post} />
            </section>
        </Layout>
  );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                tags
                author {
                    name
                    url
                }
                category
            }
            excerpt(pruneLength: 300)
            timeToRead
        }
    }
`
