import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Logan Kemprowski</h1>
        <p className={styles.description}>
          I'm a computer science student at Virginia Tech
        </p>
        <a className={styles.contactBtn} href="mailto:lkemprow@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/logo.png")}
        alt="Hero image of me"
      ></img>
      ;
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
