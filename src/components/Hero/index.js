import React from "react";
import styles from "./Hero.module.scss";

import Button from "../Button/index";

const Hero = ({ data }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heading1}>{data.heading1}</div>
      <div className={styles.heading2}>{data.heading2}</div>
      <div className={styles.subHeading}>{data.subHeading}</div>
      <div className={styles.buttonWrap}>
        {data.buttons.map((button, key) => {
          return (
            <Button theme={button.theme} key={key}>
              {button.text}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
