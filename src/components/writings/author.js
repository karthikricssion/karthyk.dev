import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import KarthikImage from '../../images/karthik.jpeg'
import media from '../shared/mediaQueries';

const AutherImageHolder = styled.div`
    width: 150px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;

    img {
        margin: 0;
    }
`

const BlogAuthorDetail = styled.div`
    margin-top: 8px;

    h5 {
        margin:0;
        margin-bottom:4px;
    }

    h3 {
        margin-bottom:8px;
    }

    p {
        margin:0;

        a {
            font-style: italic;
            text-decoration: underline;

            &:hover {
                color: #4ec26e;
            }
        }
    }

    ${media.phone`
        margin-top: 8px;
    `}

    ${media.tablet`
        margin-top: 16px;
        text-align: center;
    `}
`

const AutherDetail = () => {
    return (
        <section className="container no-padding">
            <Container>
                <Row>
                    <Col xs={12} sm={4} lg={3}>
                        <AutherImageHolder>
                            <img src={KarthikImage} alt="Karthikeyan Rajendran" />
                        </AutherImageHolder>
                    </Col>
                    <Col xs={12} sm={8} lg={9}>
                        <BlogAuthorDetail>
                            <h5>Author</h5>
                            <h3>Karthikeyan Rajendran</h3>
                            <p>I'm a front-end engineer with 6+ years of experience developing UI/UX for cloud products. I write about my journey as product developer, ideas and startup. You can reach me from <a href="mailto:karthik_ricssion@yahoo.com">karthik_ricssion@yahoo.com</a></p>
                        </BlogAuthorDetail>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AutherDetail;