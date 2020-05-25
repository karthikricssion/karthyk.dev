import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import WritingList from './SinglewritingList';

const MyWritingsLatest = styled.div`
    p {
        margin: 0;

        a {
            font-style: italic;
            text-decoration: underline;

            &:hover {
                color: #4ec26e;
            }
        }
    }
`

const ArticleList = styled.div`
    article {
        &:first-child {
            margin-top:0;
        }
    }
`

const latestWritings = (props) => {
    return (
        <section className="container no-padding">
            <MyWritingsLatest>
                <h2>My Latest writings</h2>
                
                <ArticleList>
                    <WritingList writings={props.posts.allMarkdownRemark.nodes} />
                </ArticleList>

                <p>You can go to <Link to="/writings/">writings</Link> page for more.</p>
            </MyWritingsLatest>
        </section>
    )
}

export default latestWritings;

