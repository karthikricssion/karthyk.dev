import React from 'react';
import styled from 'styled-components';

import media from '../../shared/mediaQueries';
import WritingTopic from './category';
import Tags from './tags'

const WritingDetailsTimeAuthor = styled.aside`
    font-size: 22px;
    line-height: 1.8;
    font-style: italic;
    
    a {
        text-decoration: underline !important;
        &:hover {
            color: #4ec26e;
        }
    }

    ${media.phone`
        font-size: 16px;
    `}
`

const TagHolder = styled.span`
    a {
        text-decoration: none !important;
        text-transform: capitalize;
    }
`

const PostDateAuthor = ( props ) => {
    return (
        <WritingDetailsTimeAuthor>
            <time>{ props.date }</time><span>, by</span> <a href={ props.author.url }>{ props.author.name }</a>
            <br />
            <TagHolder>
                <WritingTopic category={ props.category }/> { `: ` }
                <Tags tags={ props.tags } />
            </TagHolder>            
        </WritingDetailsTimeAuthor>
    )
}

export default PostDateAuthor