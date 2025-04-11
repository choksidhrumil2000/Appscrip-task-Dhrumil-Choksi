"use client";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div
      style={{ margin: "72px 16px" }}
      className={`${"d_flex"} ${styles.hero_main_div}`}
    >
      <div className={`${"d_flex"} ${styles.hero_section}`}>
        <p className={styles.hero_para_1}>DISCOVER OUR PRODUCTS</p>
        <p className={styles.hero_para_2}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </div>
  );
}
