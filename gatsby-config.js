module.exports = {
  siteMetadata: {
    title: "bracketsChallenge",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "CFPAT-t-D4xvcQn49bel56ejq7Pm007DZOu4nZ6Y-5c7wYYIA",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
  ],
};
