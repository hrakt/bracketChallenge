import React from "react";
import styles from "./Button.module.scss";
import cx from "classnames";

const Button = ({ children, theme, className }) => {
  return (
    <div
      className={cx(styles.button, className, {
        [styles.blue]: theme === "blue",
      })}
    >
      {children}
      <div className={styles.arrow}>
        <svg
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 9L5 5L1 1" stroke="white" stroke-width="2" />
        </svg>
      </div>
    </div>
  );
};

export default Button;
