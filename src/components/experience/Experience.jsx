import React, { useState } from "react";
import "./experience.css";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { SectionWrapper } from "../../hoc";
import { work } from "../../constants";
import { styles } from "../../styles.js";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";

const Experience = () => {
  const [workExpandedIndex, setWorkExpandedIndex] = useState(0); // Initialize with the first card expanded by default

  const toggleWorkExpand = (index) => {
    setWorkExpandedIndex(index); // Expand the clicked tab
  };

  return (
    <section className="resume__container section" id="experience">
      <motion.div variants={textVariant()}>
        <h2
          className={`section__title before:bg-dots dark:before:bg-dots-dark ${styles.primaryTextColor}`}
        >
          Work Experience
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
        <div
          className={`timeline timeline_grid grid ${styles.sideBarBgColor} dark:shadow-dark`}
        >
          <div className="timeline__header">
            {work.map((val, index) => {
              return (
                <CardHeader
                  key={index}
                  index={index}
                  category="work"
                  title={val.title}
                  expanded={workExpandedIndex === index}
                  toggleExpand={toggleWorkExpand}
                />
              );
            })}
          </div>
          <div className="timeline__body">
            {work.map((val, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  icon={val.icon}
                  title={val.title}
                  link={val.link}
                  subtitle={val.subtitle}
                  year={val.year}
                  desc={val.desc}
                  points={val.points}
                  expanded={workExpandedIndex === index}
                  toggleExpand={toggleWorkExpand}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Experience, "experience");
