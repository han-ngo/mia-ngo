import React from "react";
import { styles } from "../../styles.js";

const ScrollDown = (props) => {
  return (
    <div className="scroll__down">
      <a href="#about" className="mouse__wrapper">
        <span className={`home__scroll-name ${styles.secondaryTextColor}`}>
          Scroll Down
        </span>
        <span className="mouse dark:border-[#f8f8f2]">
          <span className="wheel dark:bg-[#f8f8f2]"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
