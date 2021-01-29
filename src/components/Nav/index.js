import React from "react";
import styles from "./Nav.module.scss";

import Button from "../Button/index";

const Nav = ({ data }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.logoWrap}>
        <img src={data.logo.image.file.url} />
      </div>
      <div className={styles.navWrap}>
        <ul>
          {data.navItems.map((item, key) => {
            return (
              <li className={styles.navItem} key={key} href={item.link}>
                {item.text}
              </li>
            );
          })}

          <Button href={data.button.link} theme={data.button.theme}>
            {data.button.text}
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
