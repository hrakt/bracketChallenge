import React from "react";
import { graphql } from "gatsby";
import Nav from "../components/Nav/index";
import Hero from "../components/Hero/index";
import Carousel from "../components/Carousel/index";

const Home = ({ data }) => {
  console.log(data);
  return (
    <main>
      <Nav />
      <Hero />
      <Carousel />
    </main>
  );
};

export default Home;

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
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
`;
