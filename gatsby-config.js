module.exports = {
  siteMetadata: {
    title: "bracketsChallenge",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "oh8gpkbgz0wi",
        accessToken: "3r9yIBF1J4BRFHVDHW__nDVlpRCWNEBPt3YLLwp80bs",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sass",
  ],
};
