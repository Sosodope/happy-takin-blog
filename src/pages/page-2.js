import React from "react";
import Link from "gatsby-link";

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/" className="links">
      Go back to the homepage
    </Link>
    <br />
    <Link to="/page-3/" className="links">
      Go to page 3
    </Link>
  </div>
);

export default SecondPage;
