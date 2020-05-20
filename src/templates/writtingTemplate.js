import React from 'react';
import _ from 'lodash';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <div>
                <div class="blog-post-informations">
                    <p>{post.frontmatter.date}, by <a href={ post.frontmatter.author.url }>{post.frontmatter.author.name}</a></p>
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
