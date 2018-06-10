require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Happy Takin"
  },
  plugins: ["gatsby-plugin-react-helmet"]
};
