import { styles } from "../../styles.js";
import { technologies } from "../../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";

const Tech = (props) => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-15">
        <ul className="tech-stack">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            >
              <li
                className={`flex ${styles.secondaryTextColor} hover:text-[#FF4D61] dark:hover:text-[#ff79c6]`}
              >
                <img
                  src={tech.icon}
                  className="w-[1.5rem] h-[1.5rem] mr-4"
                ></img>
                {tech.name}
              </li>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tech;
