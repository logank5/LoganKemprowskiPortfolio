import React from "react";
import { getImageUrl } from "../../utils";
import { FaGraduationCap } from "react-icons/fa";
import { GiArrowCursor } from "react-icons/gi";
import { BsShadows } from "react-icons/bs";
import styles from "./Education.module.css";
import { FaSchool } from "react-icons/fa";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <FaGraduationCap className={styles.educationIcon} />
            <div className={styles.educationItemText}>
              <h3>Virginia Tech</h3>
              <p>Degree: Bachelor's</p>
              <p>Major: Computer Science</p>
              <p>Minor: Human Computer Interaction</p>
              <p>Current GPA: 3.72</p>
              <p>Expected Graduation: May 2026</p>
            </div>
            <img
              className={styles.image}
              src={getImageUrl("education/VT.png")}
              alt="Virginia Tech Logo"
            />
          </li>
          <li className={styles.educationItem}>
            <FaSchool className={styles.educationIcon} />
            <div className={styles.educationItemText}>
              <h3>Freedom High School</h3>
              <p>Degree: Advanced Diploma</p>
              <p>GPA: 4.59</p>
              <p>Graduation: June 2022</p>
            </div>
            <img
              className={styles.image}
              src={getImageUrl("education/Freedom.png")}
              alt="Freedom High School Logo"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
