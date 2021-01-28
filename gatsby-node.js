const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;
//   return new Promise((resolve, reject) => {
//     graphql(
//       `
//         {
//           allContentfulPage {
//             edges {
//               node {
//                 id
//                 title
//                 image {
//                   file {
//                     url
//                     fileName
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `
//     ).then((result) => {
//       if (result.errors) {
//         reject(result.errors);
//       }

//       const pageTemplate = path.resolve(`./src/templates/home.js`);
//       result.data.allContentfulPage.edges,
//         (edge) => {
//           createPage({
//             path: `/${edge.node.title}/`,
//             component: slash(pageTemplate),
//             context: {
//               id: edge.node.id,
//             },
//           });
//         };

//       resolve();
//     });
//   });
// };

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/home.js`);
  const result = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            id
            title
            image {
              file {
                url
                fileName
              }
            }
          }
        }
      }
    }
  `);
  result.data.allSamplePages.edges.forEach((edge) => {
    createPage({
      path: `${edge.node.title}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.title,
      },
    });
  });
};
