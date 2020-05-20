import React from "react"
import { Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Karthikeyan Rajendran" />
    <h1 style={{margin: 0, marginBottom: '16px', fontSize: '70px', lineHeight: '1.1', hyphens: 'normal', fontWeight: 'bold' }}>
        Karthikeyan Rajendran 
        <small style={{ display: 'block', fontSize: '36px', lineHeight: '1.3333333333' }}>Front End Developer</small>
    </h1>
    <p style={{ margin: '32px 0', fontSize: 22, lineHeight: '1.8' }}>I’m a front-end engineer with 6+ years of experience developing UI/UX interfaces for cloud products. My passion developing for the front-end started early in college and I’ve been flirting with tech ranging from jQuery to Vue since then. I like wearing different hats. I have experience building, growing, and managing a front-end team in my career working with startups.</p>

    <Link to="/writings">My writtings</Link>
  </Layout>
)

export default IndexPage
