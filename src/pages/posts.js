import React from "react";
import Link from "gatsby-link";

const PostsPage = () => (
  <div>
    <h1>Posts Page</h1>
    <p>This is my first Gtasby site</p>
    <Link to="/page-2/" className="links">
      Back to Page 2
    </Link>
    <br />
    <Link to="/" className="links">
      Go back to the homepage
    </Link>
  </div>
);

export default PostsPage;
