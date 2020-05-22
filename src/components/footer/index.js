import React from 'react';
import styled from 'styled-components';
import './style.css';
import media from '../shared/mediaQueries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faMediumM, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FooterContainer = styled.div`
    margin: 34px auto;
    max-width: 864px;
    padding: 0 1em;
`

const ConnectMeContainer = styled.div`
    display:block;
    margin-bottom: 8px;
`

const CopyRightContainer = styled.div`
    display:block;

    ${media.phone`
        font-size: 12px;
    `}
`

const Footer = () => (
    <footer>
        <FooterContainer>
            <ConnectMeContainer>
                <a className="connect-link" href="https://twitter.com/karthik_dot_js"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className="connect-link" href="https://www.linkedin.com/in/karthikeyan-rajendren-00815a7a/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a className="connect-link" href="https://medium.com/@karthikricssion"><FontAwesomeIcon icon={faMediumM} /></a>
                <a className="connect-link" href="https://github.com/karthikricssion"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="connect-link" href="mailto:karthik_ricssion@yahoo.com"><FontAwesomeIcon icon={faDribbble} /></a>
                <a className="connect-link" href="mailto:karthik_ricssion@yahoo.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            </ConnectMeContainer>
            
            <CopyRightContainer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>, Hosted in 
                {` `}
                <a href="https://pages.github.com/">Github Pages</a>
            </CopyRightContainer>
        </FooterContainer>
    </footer>
)

export default Footer