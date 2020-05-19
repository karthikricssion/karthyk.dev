import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SiteLogo from '../assets/karthik.logo.svg'

const Header = ({ siteTitle }) => (
  <header
    style={{
      height: 80,
      paddingTop: 24,
      paddingBottom: 24,
      backgroundColor: '#fff',
      borderBottom: "1px solid #e4e4e4"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960
      }}
    >
        <Link
          to="/"
          style={{
            color: '#333',
            textDecoration: `none`,
            display: 'block',
            maxWidth: 150,
            marginLeft:16
          }}
        >
          <SiteLogo />
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
