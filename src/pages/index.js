import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Nav from "../components/Nav/index";
import Hero from "../components/Hero/index";
import Carousel from "../components/Carousel/index";

const IndexPage = () => {
  const images = get(this, "props.data.allContentfulImage.edges");
  console.log(images);
  return (
    <main>
      <Nav />
      <Hero />
      <Carousel />
    </main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulImage {
      edges {
        node {
          id
        }
      }
    }
  }
`;
