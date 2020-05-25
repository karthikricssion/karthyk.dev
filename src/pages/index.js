import React from "react"

import Layout from "../components/layout";
import BannerText from '../components/banner';
import LatestWritings from '../components/writings/latest.writings';
import SEO from "../components/seo";
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from 'gatsby';

import BetaYekalivaImg from '../images/beta-yekaliva.png'
import InterActiveDemoImg from '../images/interactive-demo.png'
import DataMonitoringImg from '../images/data-monitoring.png'
import GossipImg from '../images/gossip.png'


const IndexPage = (props) => {
    return (
        <Layout>
            <SEO title="Karthikeyan Rajendran" />
            <BannerText
                pageHeading="Karthikeyan Rajendran "
                pageInformation="I’m a front-end engineer with 6+ years of experience developing UI/UX interfaces for cloud products. My passion developing for the front-end started early in college and I’ve been flirting with tech ranging from jQuery to Vue since then. I like wearing different hats. I have experience building, growing, and managing a front-end team in my career working with startups."
                showResume="true"
            />

            <section className="container no-padding">
                <Container fluid className="no-padding">
                    <Row>
                        <Col xs={12} sm={6} lg={6} className="my-skills-list"> 
                            <h2>Skills</h2>
                            <ul>
                                <li>Javascript</li>
                                <li>Vue</li>
                                <li>jQuery</li>
                                <li>AngularJS</li>
                                <li>HTML / LESS / CSS</li>
                                <li>NodeJS / Express</li>
                                <li>MongoDB / Mongoose</li>
                            </ul>
                        </Col>

                        <Col xs={12} sm={6} lg={6} className="my-skills-list">
                            <h2>Familiar tools</h2>
                            <ul>                
                                <li>AWS</li>
                                <li>GitLab / GitHub</li>
                                <li>Docker</li>
                                <li>Adobe Photoshop</li>
                                <li>Figma</li>
                            </ul>
                        </Col>

                        <Col xs={12} sm={6} lg={6} className="my-skills-list">
                            <h2>Currently playing with</h2>
                            <ul>                
                                <li>Svelte</li>
                                <li>React Native</li>
                                <li>Vue Cli</li>
                                <li>Gatsby / React / GraphQL</li>
                            </ul>
                            <p>You can find the projects <a href="https://github.com/karthikricssion">here.</a></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        
            
            <section className="container no-padding">
                <h2>My Recent Works</h2>

                <Container fluid className="no-padding">
                    <Row>
                        <Col xs={12} sm={6} lg={6}>
                            <div className="project-card">
                                <img src={BetaYekalivaImg} className="img-responsive" alt="Beta yekaliva version" />
                                <h3>Yekaliva v3 - Beta</h3>
                                <p>Yekaliva is an intelligent conversational AI platform designed to help businesses connect more
            easily with their customers.</p>
                                <a href="https://beta.yekaliva.ai/">Demo</a>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                            <div className="project-card">
                                <img src={InterActiveDemoImg} className="img-responsive" alt="Interactive Demo"/>
                                <h3>Interactive Demo Platform</h3>
                                <p>The Interactive Demo Platform is a tool designed to help give an interactive element to demo videos,
            letting them ask questions through the chatbot, providing quick and immediate answers to individual
            audiences.</p>      
                                <a href="http://demo.positivenaick.com/">Demo</a>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} lg={6}>
                            <div className="project-card">
                                <img src={DataMonitoringImg} className="img-responsive" alt="yekaliva API monitoring system"/>
                                <h3>Yekaliva API monitoring system</h3>
                                <p>This system automatically monitors how API is being used and sends this information to
            Yekaliva servers. All API data activity is also recorded and stored for analysis.</p>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} lg={6}>
                            <div className="project-card">
                                <img src={GossipImg} className="img-responsive" alt="yekaliva API monitoring system"/>
                                <h3>Gossip</h3>
                                <p>Gossip is an anonymous social network designed to help people communicate and share their thoughts without expressing individual identities.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <LatestWritings posts={props.data} />
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
query LatestWriting {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 1) {
      nodes {
        frontmatter {
            date(formatString: "D MMMM YYYY")
            slug
            title
            category
        }
        timeToRead
        excerpt(pruneLength: 300)
      }
    }
  }
  
`
