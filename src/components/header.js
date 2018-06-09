import React from "react";
import Link from "gatsby-link";

const blue = "#5BC0EB";
const yellow = "#FDE74C";
const Header = ({ siteTitle, siteLogo }) => (
  <div
    style={{
      background: blue,
      marginBottom: "1.45rem"
    }}
  >
    <header
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)"
      }}
    >
      <img
        src={siteLogo}
        style={{
          borderRadius: "5%",
          width: "100%",
          paddingRight: "30px",
          alignSelf: "center"
        }}
      />
      <h1 style={{ margin: 0, gridColumn: "2 / span 5" }}>
        <Link
          to="/"
          style={{
            color: yellow,
            textDecoration: "none",
            textShadow: "1px 1px 6px black"
          }}
          className="links"
        >
          {siteTitle}
        </Link>
      </h1>
      <nav
        style={{
          gridColumn: "10"
        }}
      >
        <ul style={{ listStyle: "none", float: "right", display: "flex" }}>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/"
              className="links"
            >
              Home
            </Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/about"
              className="links"
            >
              About
            </Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/page-3"
              className="links"
            >
              More
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
