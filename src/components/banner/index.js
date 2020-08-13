import React from 'react';
import styled from 'styled-components';
import media from '../shared/mediaQueries';

import KarthikResume from '../../assets/karthik_resume.pdf'

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

const BannerButton = styled.a`
    outline: 0;
    background-color: #000 !important;
    border-radius: 3px;
    border: 0;
    color: #fff;
    font-weight: 500;
`

const DownloadButtonContainer = styled.div`
    small {
        display:block;
        font-style:italic;
        margin-top:4px;
    }
`

const BannerText = (props) => {
    const showResume = props.showResume === 'true' ? true : false
    
    return (
        <>
            <section className="container no-padding">
                <BannerHead>{ props.pageHeading }</BannerHead>
                <BannerHeadTwo>{ props.pageInformation }</BannerHeadTwo>
                { showResume && 
                    <DownloadButtonContainer>
                        <BannerButton href={KarthikResume} download className="btn btn-primary" >Download Resume</BannerButton>
                    </DownloadButtonContainer>
                }
            </section>
        </>
    )
}

export default BannerText