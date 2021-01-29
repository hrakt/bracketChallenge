import React from "react";
import styles from "./Card.module.scss";
import cx from "classnames";
import Img from "gatsby-image";

const Card = ({ content }) => {
  console.log(content.image.image);
  const name = content.image.image.title;
  return (
    <div className={styles.card}>
      <div className={cx(styles.imgWrap, styles[name])}>
        <img src={content.image.image.fluid.src} />
      </div>
      <div className={styles.textWrap}>
        <div className={styles.heading}>{content.header}</div>
        <div className={styles.subHeading}>{content.subHead}</div>
        <div className={styles.cta}>
          <a href="/">Learn More</a>
          <div className={styles.arrow}>
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
