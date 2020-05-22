import React from 'react';
import styled from 'styled-components';
import Tags from './tags';

const WritingDetailsTimeAuthor = styled.aside`
    font-size: 22px;
    line-height: 1.8;
    font-style: italic;
    
    a {
        &:hover {
            color: #4ec26e;
        }
    }
`

const TagHolder = styled.span`
    a {
        text-transform: capitalize;
    }
`

const PostDateAuthor = ( props ) => {
    return (
        <WritingDetailsTimeAuthor>
            <time>{ props.date }</time>, by <a href={ props.author.url }>{ props.author.name }</a>
            <br />
            <TagHolder>
                <Tags tags={ props.tags } />
            </TagHolder>            
        </WritingDetailsTimeAuthor>
    )
}

export default PostDateAuthor