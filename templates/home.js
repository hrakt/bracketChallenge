import React from "react";
import {graphql} from graphql;
import Nav from "../components/Nav/index";
import Hero from "../components/Hero/index";
import Carousel from "../components/Carousel/index";

const Home = ({ data }) => {
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
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      heading
      subheading
      slug
      description {
        content {
          content {
            value
          }
        }
      }
      image {
        file {
          url
        }
      }
    }
  }
`
