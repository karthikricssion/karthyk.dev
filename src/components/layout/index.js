import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import "./style.css"

import Header from '../header';
import Footer from '../footer';

const LayoutStyle = styled.div`
    margin: 0 auto;
    max-width: 864px;
    padding: 0 1em;
`

const Layout = ({ children }) => {
  return (
      <>
        <Header />
        <LayoutStyle>
          {children}
        </LayoutStyle>
        <Footer />
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
