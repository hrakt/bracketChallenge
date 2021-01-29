import React from "react";
import Card from "./Card/Card";
import styles from "./Carousel.module.scss";

const Carousel = ({ data }) => {
  return (
    <div className={styles.carousel}>
      {data.map((content, key) => {
        return <Card key={key} content={content} />;
      })}
    </div>
  );
};

export default Carousel;
