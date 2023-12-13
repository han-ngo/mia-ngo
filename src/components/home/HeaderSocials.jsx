import React from "react";
import { styles } from "../../styles.js";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        title="Email"
        href="mailto:gh.hanngo@gmail.com"
        className={`home__social-link ${styles.primaryTextColor}`}
      >
        <i className="fa-regular fa-envelope"></i>
      </a>

      <a
        title="LinkedIn"
        href="https://www.linkedin.com/in/mia-han-ngo/"
        className={`home__social-link ${styles.primaryTextColor}`}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a
        title="GitHub"
        href="https://github.com/han-ngo"
        className={`home__social-link ${styles.primaryTextColor}`}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        title="Resume"
        href="https://drive.google.com/file/d/1j3UYKP8PId3NkayJ17jJUtWoFAYvwVRh/view?usp=sharing"
        className={`home__social-link ${styles.primaryTextColor}`}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-regular fa-file"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
