import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import "./layout.css"

const LayoutStyle = styled.main`
  margin: 32px auto;
  max-width: 864px;
  padding: 0 1em 1em;
`

const Layout = ({ children }) => {
  return (
      <LayoutStyle>
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>, Hosted in 
          {` `}
          <a href="https://pages.github.com/">Github Pages</a>
        </footer>
      </LayoutStyle>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
