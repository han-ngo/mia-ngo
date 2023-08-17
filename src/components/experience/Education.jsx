import React, { useState } from "react";
import "./experience.css";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { SectionWrapper } from "../../hoc";
import { education } from "../../constants";
import { styles } from "../../styles.js";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";

const Education = () => {
  const [educationExpandedIndex, setEducationExpandedIndex] = useState(2);

  const toggleEducationExpand = (index) => {
    setEducationExpandedIndex(index); // Expand the clicked tab
  };

  return (
    <section className="resume__container section" id="education">
      <motion.div variants={textVariant()}>
        <h2
          className={`section__title before:bg-dots dark:before:bg-dots-dark ${styles.primaryTextColor}`}
        >
          Education
        </h2>
      </motion.div>
      <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
        <div
          className={`timeline timeline_grid grid ${styles.sideBarBgColor} dark:shadow-dark`}
        >
          <div className="timeline__header">
            {education.map((val, index) => {
              return (
                <CardHeader
                  key={index}
                  index={index}
                  category="education"
                  title={val.title}
                  expanded={educationExpandedIndex === index}
                  toggleExpand={toggleEducationExpand}
                />
              );
            })}
          </div>
          <div className="timeline__body">
            {education.map((val, index) => {
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
                  expanded={educationExpandedIndex === index}
                  toggleExpand={toggleEducationExpand}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Education, "education");
