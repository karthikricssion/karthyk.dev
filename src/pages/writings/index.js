import React from "react";
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import BannerText from '../../components/banner';
import WritingList from '../../components/writings/SinglewritingList'
import SEO from "../../components/seo"

const WrittingsListPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="Writings" description="I use this space to share my thoughts on startups, design thinking, product development, ideas, code  or just about the things i like to share from my experience."/>
          
            <BannerText 
              pageHeading="Writings" 
              pageInformation="I use this space to share my thoughts on startups, design thinking, product development, ideas, code or just about the things i like to share from my experience."
            />

            <section className="container no-padding">
                <WritingList writings={data.allMarkdownRemark.nodes} />
            </section>
        </Layout>
    )
  }

export default WrittingsListPage
  

export const query = graphql`
query TagsList {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {published: {eq: true}}}) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM YYYY")
          slug
          title
          category
        }
        excerpt(pruneLength: 300)
        timeToRead
      }
    }
  }
`