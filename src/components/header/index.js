import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import SiteLogo from '../../assets/karthik.logo.svg'
import media from '../shared/mediaQueries';

const SiteHeader = styled.header`
    height: 80px;
    padding-top: 24px;
    padding-botton:24px;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4
`

const SiteHeaderLayout = styled.div`
    margin: 0 auto;
    max-width: 854px;

    ${media.phone`
      .logo-link {
        width: 114px;
      }
    `}
`

const SiteHeaderRightSide = styled.div`
    float:right;

    a {
        color: #333;
        text-decoration: none;
        display: inline-block;
        margin-right:16px;
        font-size: 22px;
        line-height: 1.8;

        ${media.phone`
          font-size: 16px;
        `}

        ${media.tablet`
          font-size: 16px;
        `}
    }
`

const Header = () => (
  <SiteHeader>
    <SiteHeaderLayout>
        <Link
          to="/"
          className="logo-link"
          style={{
            color: '#333',
            textDecoration: `none`,
            display: 'inline-block',
            width: 150,
            marginLeft:16
          }}
        >
          <SiteLogo />
        </Link>

        <SiteHeaderRightSide>
            <Link to="/writings/">Writings</Link>
        </SiteHeaderRightSide>
    </SiteHeaderLayout>
  </SiteHeader>
)

export default Header
