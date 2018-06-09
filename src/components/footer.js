import React from "react";
import Link from "gatsby-link";

const blue = "#5BC0EB";
const yellow = "#FDE74C";
const year = new Date().getFullYear();
const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: blue,
      paddingTop: "1.45rem",
      textAlign: "center",
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%"
    }}
  >
    <p>
      &copy; {year} {siteTitle}
    </p>
  </footer>
);

export default Footer;
