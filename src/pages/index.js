import React from "react";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Nav from "../components/Nav/index";
import Hero from "../components/Hero/index";
import Carousel from "../components/Carousel/index";

const IndexPage = ({ data }) => {
  const navData = data.allContentfulPage.nodes[0].nav;
  const heroData = data.allContentfulPage.nodes[0].hero;
  const carousel = data.allContentfulPage.nodes[0].carousel;

  const backgroundFluidImageStack = [
    data.allContentfulPage.nodes[0].background.fluid,
    `linear-gradient(
      360deg,
      #000000 13.96%,
      rgba(0, 0, 0, 0) 107.34%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%)`,
  ].reverse();

  return (
    <BackgroundImage Tag="main" fluid={backgroundFluidImageStack}>
      <Nav data={navData} />
      <Hero data={heroData} />
      <Carousel data={carousel} />
    </BackgroundImage>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    allContentfulPage(filter: { title: { eq: "Home" } }) {
      nodes {
        background {
          fluid(quality: 100, maxWidth: 3400) {
            src
            ...GatsbyContentfulFluid
          }
        }
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
          button {
            text
            link
            theme
          }
          navItems {
            text
            link
          }
          logo {
            image {
              file {
                url
              }
            }
          }
        }
        title
        carousel {
          image {
            image {
              fluid(maxWidth: 220) {
                src
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
