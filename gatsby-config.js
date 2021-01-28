module.exports = {
  siteMetadata: {
    title: "bracketsChallenge",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "3r9yIBF1J4BRFHVDHW__nDVlpRCWNEBPt3YLLwp80bs",
        spaceId: "oh8gpkbgz0wi",
      },
    },
    "gatsby-plugin-sass",
  ],
};
