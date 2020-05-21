import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Karthikeyan Rajendran" />
    <section className="container">
      <h1 style={{margin: 0, fontSize: '56px', lineHeight: '1.1', hyphens: 'normal', fontWeight: 'bold' }}>
          Karthikeyan Rajendran 
      </h1>
      <p style={{ fontWeight:'bold', margin: '24px 0', fontSize: 24, lineHeight: '1.3333333333' }}>I’m a front-end engineer with 6+ years of experience developing UI/UX interfaces for cloud products. My passion developing for the front-end started early in college and I’ve been flirting with tech ranging from jQuery to Vue since then. I like wearing different hats. I have experience building, growing, and managing a front-end team in my career working with startups.</p>
    </section>
  </Layout>
)

export default IndexPage
