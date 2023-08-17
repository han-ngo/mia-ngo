import React from "react";
import { styles } from "../../styles.js";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion.js";

const CardHeader = (props) => {
  return (
    <>
      <div
        className={`timeline__item flex flex-column dark:before:bg-[#ff79c6]`}
      >
        <div>
          <div>
            <div>
              <button
                className={`${
                  props.category === "work"
                    ? "company-button"
                    : "education-button"
                } ${
                  props.expanded
                    ? "selected dark:border-[#ff79c6] border-[#FF4D61]"
                    : ""
                }`}
                onClick={() => props.toggleExpand(props.index)}
                type="button"
                role="tab"
              >
                <span
                  className={`${
                    props.expanded
                      ? styles.accentTextColor
                      : styles.mainTextColor
                  }`}
                >
                  {props.title}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
