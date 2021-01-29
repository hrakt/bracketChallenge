import React from "react";
import styles from "./Nav.module.scss";

import Button from "../Button/index";

const Nav = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.nav}>
      <div className={styles.logoWrap}>
        <img></img>
      </div>
      <div className={styles.navWrap}>
        <ul>
          <li className={styles.navItem}>What's Included?</li>
          <li className={styles.navItem}>Pricing</li>
          <li className={styles.navItem}>Sign in</li>
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
