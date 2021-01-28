import React from "react";
import styles from "./Hero.module.scss";

import Button from "../Button/index";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heading1}>
        AMERICA’S #1 RATED ADVENTURE PLATFORM
      </div>
      <div className={styles.heading2}>
        <div>Take control of</div>
        <div>your weekends</div>
      </div>
      <div className={styles.subHeading}>Find adventure anywhere.</div>
      <div className={styles.buttonWrap}>
        <Button theme="blue" className={styles.button}>
          Get Started
        </Button>
        <Button>Request a demo</Button>
      </div>
    </div>
  );
};

export default Hero;
