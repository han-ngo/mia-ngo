import DOMPurify from "dompurify";
import React, { useState, useEffect } from "react";
import { styles } from "../../styles.js";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../utils/motion.js";

const Card = (props) => {
  const [animatePoints, setAnimatePoints] = useState(false);

  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    // set all elements owning target to target=_blank
    if ("target" in node) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener");
    }
  });

  useEffect(() => {
    if (props.expanded) {
      // Delay animation start to ensure smooth UI transition
      setTimeout(() => {
        setAnimatePoints(true);
      }, 300);
    } else {
      setAnimatePoints(false);
    }
  }, [props.expanded]);
  return (
    <>
      <div className={`timeline__item dark:before:bg-[#ff79c6]`}>
        <div>
          {props.expanded && (
            <div>
              <p>
                <h3 className={`timeline__title ${styles.primaryTextColor}`}>
                  <span className="title">{props.subtitle} @ </span>
                  <span className="company">
                    <a
                      className={`${styles.accentSubtextColor}`}
                      href={`${props.link}`}
                      target="_blank"
                    >
                      {props.title}
                    </a>
                  </span>
                </h3>
                <div className={`duration ${styles.secondaryTextColor}`}>
                  {props.year}
                </div>
                <ul className="timeline__points mt-5 list-disc ml-5 space-y-2">
                  {props.points.map((point, index) => (
                    <motion.li
                      key={`experience-point-${index}`}
                      className={`timeline__text ${styles.mainTextColor} dark:before:text-[#ff79c6]`}
                      animate={animatePoints ? "visible" : "hidden"}
                      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(point),
                      }}
                    />
                  ))}
                </ul>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
