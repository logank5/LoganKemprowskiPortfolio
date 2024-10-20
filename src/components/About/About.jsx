import React from "react";
import { getImageUrl } from "../../utils";
import { FaGraduationCap } from "react-icons/fa";
import { GiArrowCursor } from "react-icons/gi";
import { BsShadows } from "react-icons/bs";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl("about/profile.png")} alt="About Me Image" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <FaGraduationCap className={styles.aboutIcon}/>
            <div className={styles.aboutItemText}>
              <h3>Computer Science Student</h3>
              <p>
                I am a junior at Virginia Tech, with a passion for Computer Science and problem solving
              </p>
              <p>
                I am currently seeking a summer 2025 internship 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
