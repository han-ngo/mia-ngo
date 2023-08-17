import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import { SectionWrapper } from "../../hoc";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import { portrait, portraitDark } from "../../assets";
import { styles } from "../../styles.js";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";

const Home = (props) => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
          <img
            src={`${props.darkMode ? portraitDark : portrait}`}
            alt=""
            className="home__img"
          />
          <h1 className="home__name">
            <span
              className={`my-name ${styles.primaryTextColor}`}
              data-value="MIA NGO"
              onMouseOver={hackerEffect}
            >
              MIA NGO
            </span>
          </h1>
          <span className={`home__education ${styles.secondaryTextColor}`}>
            Software Engineer // Bay Area, CA
          </span>

          <HeaderSocials />

          <a
            href="#contact"
            className={`btn ${styles.buttonBgColor} ${styles.primaryTextColor}`}
          >
            Contact Me
          </a>
        </motion.div>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );

  function hackerEffect() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%^&*_+?";
    const hackerText = "my-name";
    let text = document.getElementsByClassName(hackerText)[0];

    let interval = 0;
    let iteration = 0;
    clearInterval(interval);

    let update = () => {
      text.innerText = Array.from(text.innerText)
        .map((char, index) => {
          if (index < iteration) {
            return text.dataset.value[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iteration >= text.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    };

    interval = setInterval(update, 50);
  }
};

export default SectionWrapper(Home, "home");
