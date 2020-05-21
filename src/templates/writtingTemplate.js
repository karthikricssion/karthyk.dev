import React from 'react';
import _ from 'lodash';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

import WritingDetail from '../components/writings/writingDetail';

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <section className="container">
                <WritingDetail post={post} />

                <div>
                    <div>
                        <div>
                            {post.frontmatter.tags.map((tag, index) => (
                                <Link className="tag button"
                                    key={tag}
                                    to={`/writings/tags/${_.kebabCase(tag)}`}>
                                {tag}
                            </Link>
                            ))}
                        </div>
                    </div>
                    <h1>{ post.frontmatter.title }</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
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
            }
            timeToRead
        }
    }
`
