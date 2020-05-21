import React from "react"

import Layout from "../components/layout";
import BannerText from '../components/banner';
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Karthikeyan Rajendran" />
    <section className="container">
      <BannerText
        pageHeading="Karthikeyan Rajendran "
        pageInformation="I’m a front-end engineer with 6+ years of experience developing UI/UX interfaces for cloud products. My passion developing for the front-end started early in college and I’ve been flirting with tech ranging from jQuery to Vue since then. I like wearing different hats. I have experience building, growing, and managing a front-end team in my career working with startups."
      />
    </section>
  </Layout>
)

export default IndexPage
