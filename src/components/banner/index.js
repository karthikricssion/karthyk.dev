import React from 'react';
import styled from 'styled-components';
import media from '../shared/mediaQueries';

const BannerHead = styled.h1`
    margin:0;
    font-size: 56px; 
    line-height: 1.1; 
    hyphens: normal; 
    font-weight: bold;

    &::first-letter {
        text-transform: uppercase;
    }

    ${media.phone`
        font-size: 32px;
    `}

    ${media.tablet`
        font-size: 40px;
    `}
`

const BannerHeadTwo = styled.h2`
    margin-top: 1em;    
    font-weight:bold; 
    margin: 24px 0; 
    font-size: 24px; 
    line-height: 1.3333333333;

    ${media.phone`
        font-size: 21px;
    `}

    ${media.tablet`
        font-size: 22px;
    `}
`

const BannerText = (props) => (
    <section className="container">
        <BannerHead>{ props.pageHeading }</BannerHead>
        <BannerHeadTwo>{ props.pageInformation }</BannerHeadTwo>
    </section>
)

export default BannerText