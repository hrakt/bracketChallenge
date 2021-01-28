import React from "react";
import Card from "./Card/Card";
import styles from "./Carousel.module.scss";

const arr = [
  {
    header: "Agumented Reality",
    subHead: "An interactive experience like no other.",
    cta: {
      title: "Learn more",
      link: "",
    },
  },
  {
    header: "Virtual Reality",
    subHead: "A truely immersive virtual experience",
    cta: {
      title: "Learn more",
      link: "",
    },
  },
  {
    header: "Mobile",
    subHead: "Earn points on the go with our mobile app.",
    cta: {
      title: "Learn more",
      link: "",
    },
  },
];

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      {arr.map((content, key) => {
        return <Card key={key} content={content} />;
      })}
    </div>
  );
};

export default Carousel;
