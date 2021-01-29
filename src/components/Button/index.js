import React from "react";
import styles from "./Button.module.scss";
import cx from "classnames";
import SvgIcon from "../SvgIcon";

const Button = ({ children, theme, className, link }) => {
  return (
    <div
      className={cx(styles.button, className, {
        [styles.blue]: theme === "blue",
        [styles.grey]: theme === "grey",
      })}
    >
      <a href={link}>{children}</a>
      <SvgIcon icon={"arrow"} className={styles.arrow} />
    </div>
  );
};

export default Button;
