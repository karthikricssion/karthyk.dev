import React from 'react';
import styled from 'styled-components';

const BannerHead = styled.h1`
    margin-top: 32px;
    margin: 0; 
    font-size: 56px; 
    lineHeight: 1.1; 
    hyphens: normal; 
    fontWeight: bold;

    &::first-letter {
        text-transform: uppercase;
    }
`

const BannerHeadTwo = styled.h2`
    margin-top: 1em;    
    font-weight:bold; 
    margin: 24px 0; 
    font-size: 24px; 
    line-height: 1.3333333333
`

const BannerText = (props) => (
    <section className="container">
        <BannerHead>{ props.pageHeading }</BannerHead>
        <BannerHeadTwo>{ props.pageInformation }</BannerHeadTwo>
    </section>
)

export default BannerText