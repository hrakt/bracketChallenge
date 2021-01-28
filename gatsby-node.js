const path = require(`path`);
const slash = require(`slash`);

exports.createAssets = ({ graphql, actions }) => {
  console.log("hello");
  const { createAssets } = actions;
  return graphql(
    `
      {
        allContentful {
          edges {
            node {
              name
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  )
    .then((result) => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors);
      }

      const homeTemplate = path.resolve("./src/templates/home.js");
      // Then for each result we create a page.
      result.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
          path: `/home`,
          component: slash(homeTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        });
      });
    })
    .catch((error) => {
      console.log("Error retrieving contentful data", error);
    });
};
