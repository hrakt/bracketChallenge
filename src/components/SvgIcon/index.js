import React from "react";

const SvgIcon = ({ icon, className }) => {
  return icon === "arrow" ? (
    <div className={className}>
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
  ) : null;
};

export default SvgIcon;