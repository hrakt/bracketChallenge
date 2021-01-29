import React from "react";
import styles from "./Card.module.scss";
import cx from "classnames";
// import Img from "gatsby-image";
import SvgIcon from "../../SvgIcon";

const Card = ({ content }) => {
  const name = content.image.image.title;
  return (
    <div className={styles.card}>
      <div className={cx(styles.imgWrap, styles[name])}>
        <img src={content.image.image.fluid.src} alt={name} />
      </div>
      <div className={styles.textWrap}>
        <div className={styles.heading}>{content.header}</div>
        <div className={styles.subHeading}>{content.subHead}</div>
        <div className={styles.cta}>
          <a href="/">Learn More</a>
          <SvgIcon icon={"arrow"} className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};

export default Card;
