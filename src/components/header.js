import React from 'react'
import Link from 'gatsby-link'

const blue = '#5BC0EB'
const yellow = '#FDE74C'
const Header = ({ siteTitle, siteLogo }) => (
  <div
    style={{
      background: blue,
      marginBottom: '1.45rem',
    }}
  >
    <header
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
      }}
    >
      <h1 style={{ margin: 0, gridColumn: 'span 3' }}>
        <Link
          to="/"
          style={{
            color: yellow,
            textDecoration: 'none',
            textShadow: '1px 1px 6px black',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav
        style={{
          gridColumn: '10',
        }}
      >
        <img src={siteLogo} style={{ borderRadius: '5%' }} />
      </nav>
    </header>
  </div>
)

export default Header
