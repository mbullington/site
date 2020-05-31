const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Michael Bullington`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: ["src/styles"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, "src", "images"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Bullington`,
        short_name: `mbullington`,
        start_url: `/`,
        background_color: `#6f2480`,
        theme_color: `#6f2480`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
