import React from 'react';
import styled from 'styled-components';
import DateAutherTag from './postDetailComponents/dateAuthor';

import shardedStyle from '../shared/style.js'

const WritingListStyle = styled.article`${shardedStyle.writingList}`

const WritingsHead = styled.h1`
    margin: 0; 
    margin-top: 32px;
    font-size: 56px; 
    line-height: 1.1; 
    hyphens: normal; 
    font-weight: bold;

    &::first-letter {
        text-transform: uppercase;
    }
`

const WritingDetails = ( props ) => {
    return (
        <WritingListStyle>
            <DateAutherTag
                date={ props.post.frontmatter.date }
                author={ props.post.frontmatter.author }
                category={ props.post.frontmatter.category }
                tags = { props.post.frontmatter.tags }
            />

            <WritingsHead>{ props.post.frontmatter.title }</WritingsHead>
            <div className="writing-content" dangerouslySetInnerHTML={{ __html: props.post.html }} />
        </WritingListStyle>
    )
}   

export default WritingDetails