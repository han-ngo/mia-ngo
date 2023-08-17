import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles.js";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { TfiGithub } from "react-icons/tfi";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  return (
    <section className="work container section" id="work">
      <motion.div variants={textVariant()}>
        <h2 className={`section__title ${styles.primaryTextColor}`}>
          Projects
        </h2>
      </motion.div>

      <div className="work__container grid">
        {items.map((elem, index) => {
          const {
            id,
            image,
            title,
            subtitle,
            languages,
            category,
            description,
            github,
            demo,
            youtube,
            link_num,
          } = elem;
          return (
            <motion.div
              key={id}
              variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
            >
              <div className="work__card" key={id}>
                <div className="work__thumbnail">
                  <img src={image} alt="" className="work__img" />
                  <div className={`work__mask ${styles.maskBgColor}`}></div>
                </div>

                <div className="work__content">
                  <span
                    className={`work__category ${styles.buttonBgColor} ${styles.primaryTextColor}`}
                  >
                    {category}
                  </span>
                  <span
                    className={`portfolio__links flex flex-row justify-end ${
                      link_num === 1 ? "left-[28rem]" : "left-[23rem]"
                    }`}
                  >
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        className={`work__button text-[1.85rem] ${styles.primaryInverseTextColor} ${styles.primaryInverseHoverColor}`}
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    )}
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        className={`work__button text-[1.70rem] ${styles.primaryInverseTextColor} ${styles.primaryInverseHoverColor}`}
                      >
                        <i class="fa-regular fa-folder-open"></i>
                      </a>
                    )}
                    {youtube && (
                      <a
                        href={youtube}
                        target="_blank"
                        className={`work__button text-[1.85rem] ${styles.primaryInverseTextColor} ${styles.primaryInverseHoverColor}`}
                      >
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    )}
                  </span>
                  <h3
                    className={`work__title ${styles.primaryInverseTextColor}`}
                  >
                    <span class="title">{title}</span>
                  </h3>
                  <p
                    className={`work__description ${styles.secondaryInverseTextColor}`}
                  >
                    {description}
                  </p>
                  <div
                    className={`work__technology flex flex-row ${styles.secondaryInverseTextColor}`}
                  >
                    <ul className="tech__stack">
                      {languages.map((tech, index) => (
                        <li
                          className={`flex font-semibold ${styles.primaryInverseHoverColor}`}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
