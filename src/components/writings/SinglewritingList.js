import React from "react";
import { Link } from 'gatsby';

import shardedStyle from '../shared/style.js'
import styled from 'styled-components';
import media from '../shared/mediaQueries';

const WritingListStyle = styled.article`${shardedStyle.writingList}
    &:first-child {
        margin-top:0;
    }
`
const WritingListTitle = styled.h2`${shardedStyle.WritingListTitle}
    ${media.phone`
        font-size: 22px;
    `}

    ${media.tablet`
        font-size: 28px;
    `}
`
const WritingListDatePosted = styled.aside`${shardedStyle.writingListDatePosted}
    ${media.phone`
        font-size: 16px;
    `}
`
const WritingListOverview = styled.p`${shardedStyle.writingListOverview}
    ${media.phone`
        font-size: 16px;
    `}
`

const WritingList = (props) => {
    return (    
        <>
        {props.writings.map(({ frontmatter, timeToRead, excerpt } , index ) => (
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
        </>
    )
}

export default WritingList
