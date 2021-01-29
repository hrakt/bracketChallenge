import React from "react";
import { graphql } from "gatsby";
import Nav from "../components/Nav/index";
import Hero from "../components/Hero/index";
import Carousel from "../components/Carousel/index";

const IndexPage = ({ data }) => {
  const navData = data.allContentfulPage.nodes[0].nav;
  const heroData = data.allContentfulPage.nodes[0].hero;
  const carousel = data.allContentfulPage.nodes[0].carousel;
  const background = data.allContentfulPage.nodes[0].background.image.file.url;

  return (
    <main
      style={{
        backgroundImage: `linear-gradient(360deg, #000000 13.96%, rgba(0, 0, 0, 0) 107.34%), linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%) url(${background}) `,
      }}
    >
      <Nav data={navData} />
      <Hero data={heroData} />
      <Carousel data={carousel} />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    allContentfulPage {
      nodes {
        background {
          image {
            file {
              url
            }
          }
        }
        id
        hero {
          heading1
          heading2
          buttons {
            theme
            text
            link
          }
          subHeading
        }
        nav {
          ... on ContentfulButton {
            theme
            text
            link
          }
          ... on ContentfulNavItem {
            text
            link
          }
          ... on ContentfulImage {
            id
            name
            image {
              title
              file {
                url
              }
            }
          }
        }
        title
        carousel {
          id
          image {
            image {
              file {
                url
              }
              title
            }
          }
          subHead
          header
        }
      }
    }
  }
`;
