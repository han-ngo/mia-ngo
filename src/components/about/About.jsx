import React from "react";
import "./about.css";
import { SectionWrapper } from "../../hoc";
import Tech from "./Tech";
import AboutBox from "./AboutBox";
import { secondaryPortrait, secondaryPortraitDark } from "../../assets";
import { styles } from "../../styles.js";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";

const About = (props) => {
  return (
    <section className="about container section" id="about">
      <motion.div variants={textVariant()}>
        <h2 className={`section__title ${styles.primaryTextColor}`}>
          About Me
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
        <div className="about__container grid">
          <img
            src={`${
              props.darkMode ? secondaryPortraitDark : secondaryPortrait
            }`}
            alt=""
            className="about__img"
          />

          <div
            className={`about__data ${styles.sideBarBgColor} dark:before:border-r-[#282A36] dark:shadow-dark`}
          >
            <div className="about__info">
              <p className={`about__description ${styles.mainTextColor}`}>
                I am currently a Software Engineer at{" "}
                <a
                  className={`${styles.accentSubtextColor}`}
                  href="https://www.oracle.com/corporate/"
                  target="_blank"
                >
                  Oracle
                </a>
                , working under team{" "}
                <a
                  className={`${styles.accentSubtextColor}`}
                  href="https://www.oracle.com/cx/platform/"
                  target="_blank"
                >
                  Oracle Cloud CX Platform
                </a>{" "}
                - a complete & modern content management platform. Skilled
                Software Engineer with a passion for developing innovative
                solutions and optimizing user experiences. Proficient in{" "}
                <i>Python</i>, <i>Java</i>, <i>JavaScript</i>, and web
                technologies. With over 3 years in the industry, I excel in
                full-stack web development, translating conceptual ideas into
                viable prototypes and designing robust coding architectures.
                Committed to delivering high-quality solutions while fostering
                effective cross-functional collaboration.
              </p>
            </div>

            <div className="about__skills">
              <Tech />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(About, "about");
