import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaFileDownload, FaItchIo } from "react-icons/fa";

import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <ul className={styles.links}>
          <div className={styles.socialIcons}>
            <li className={styles.link}>
              <MdEmail className={styles.icon} alt="Email icon" />
              <a href="mailto:lkemprow@email.com">lkemprow@gmail.com</a>
            </li>
          </div>
          <div className={styles.socialIcons}>
          <li className={styles.link}>
            <FaLinkedin className={styles.icon} />
            <a href="https://www.linkedin.com/in/logan-kemprowski/">
              @logan-kemprowski
            </a>
          </li>
          </div>
          <div className={styles.socialIcons}>
          <li className={styles.link}>
            <FaGithub className={styles.icon} />
            <a href="https://github.com/logank5">GitHub: @logank5</a>
          </li>
          </div>
          <div className={styles.socialIcons}>
          <li className={styles.link}>
            <FaItchIo className={styles.icon} />
            <a href="https://github.com/logank5">Itch.Io: @logank55</a>
          </li>
          </div>
          <div className={styles.socialIcons}>
          <li className={styles.link}>
            <FaFileDownload className={styles.icon} />
            <a href="Logan_Kemprowski_Resume.pdf" download>
              Resume
            </a>
          </li>
          </div>
        </ul>
      </div>
      <ContactForm></ContactForm>
    </footer>
  );
};
