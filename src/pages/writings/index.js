import React from "react";
import { graphql, Link } from 'gatsby';

import shardedStyle from '../../components/shared/style.js'
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from "../../components/seo"

const WritingListStyle = styled.article`${shardedStyle.writingList}`
const WritingListTitle = styled.h2`${shardedStyle.WritingListTitle}`
const WritingListDatePosted = styled.aside`${shardedStyle.writingListDatePosted}`
const WritingListOverview = styled.p`${shardedStyle.writingListOverview}`

const WrittingsListPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="Writings" />
            <section className="container">
              {data.allMarkdownRemark.nodes.map(({ frontmatter, timeToRead, excerpt } , index ) => (
                  <WritingListStyle key={index}>
                    <WritingListTitle>
                      <Link to={frontmatter.slug}>{frontmatter.title}</Link>
                    </WritingListTitle>
                    
                    <WritingListDatePosted>
                        <time>{frontmatter.date} - {timeToRead} min read</time>
                    </WritingListDatePosted>

                    <Link to={frontmatter.slug}>
                      <WritingListOverview>{excerpt}</WritingListOverview>
                    </Link>
                  </WritingListStyle>
              ))}
            </section>
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
        excerpt(pruneLength: 500)
        timeToRead
      }
    }
  }
`