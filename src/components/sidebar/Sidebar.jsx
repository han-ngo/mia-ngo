import React, { useState } from "react";
import "./sidebar.css";
import { logo, logoWhite } from "../../assets";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { styles } from "../../styles.js";

const Sidebar = (props) => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside
        className={`${props.darkMode ? "dark" : ""} ${
          toggle ? "aside show-menu" : "aside"
        } ${styles.sideBarBgColor}`}
      >
        <a href="#home" className="nav__logo">
          <img src={`${props.darkMode ? logoWhite : logo}`} alt="" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className={`nav__link ${styles.primaryTextColor}`}
                >
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#about"
                  className={`nav__link ${styles.primaryTextColor}`}
                >
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#experience"
                  className={`nav__link ${styles.primaryTextColor}`}
                >
                  <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#education"
                  className={`nav__link ${styles.primaryTextColor}`}
                >
                  <i className="icon-graduation"></i>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#work"
                  className={`nav__link ${styles.primaryTextColor}`}
                >
                  <i className="icon-layers"></i>
                </a>
              </li>

              {/* <li className="nav__item">
                <a
                  href="#blog"
                  className={`nav__link ${styles.primaryTextColor}`}
                >
                  <i className="icon-note"></i>
                </a>
              </li> */}

              <li className="nav__item">
                <a
                  href="#contact"
                  className={`nav__link ${styles.primaryTextColor}`}
                >
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span
            className={`${
              props.darkMode
                ? styles.primaryTextColor
                : styles.secondaryTextColor
            } hover:text-[#9B98B3] dark:hover:text-[#FFD15C] text-[22px] font-medium cursor-pointer`}
            onClick={props.toggleDarkMode}
          >
            {props.darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
          </span>
        </div>
      </aside>

      <div
        className={`${
          toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"
        } ${styles.sideBarBgColor}`}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
