import React from "react";
import { Link } from 'gatsby';

import shardedStyle from '../shared/style.js'
import styled from 'styled-components';

const WritingListStyle = styled.article`${shardedStyle.writingList}`
const WritingListTitle = styled.h2`${shardedStyle.WritingListTitle}`
const WritingListDatePosted = styled.aside`${shardedStyle.writingListDatePosted}`
const WritingListOverview = styled.p`${shardedStyle.writingListOverview}`

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
