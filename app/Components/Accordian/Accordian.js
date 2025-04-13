import React, { Children, useEffect, useState } from "react";
import footer_styles from "../Footer/Footer.module.css";
import styles from "./Accordian.module.css";
import arrow from "../../Assets/arrow-right.png";
import bl_arrow from "../../Assets/arrow-left.png";

import Image from "next/image";

const Accordion = ({
  title = "Accordion Title",
  children,
  flag,
  open,
  custom_styles = {},
  supp_txt,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const toggleAccordion = () => {
    if (flag === "nav-icon") return;
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={custom_styles.accordian ? "" : styles.accordion}
        style={custom_styles.accordian ? custom_styles.accordian : {}}
      >
        {flag !== "nav-icon" && (
          <div className={styles.accordion_header} onClick={toggleAccordion}>
            <span
              className={
                custom_styles.heading
                  ? ""
                  : footer_styles.footer_section_2_heading
              }
              style={custom_styles.heading ? custom_styles.heading : {}}
            >
              {title}
            </span>
            <span
              className={`${custom_styles.arrow ? "" : styles.arrow} ${
                isOpen ? styles.open : ""
              }`}
              style={custom_styles.arrow ? custom_styles.arrow : {}}
            >
              <Image
                src={custom_styles.arrow ? bl_arrow : arrow}
                alt="arrow"
                width={20}
                height={20}
              />
            </span>
          </div>
        )}
        <div
          style={
            custom_styles.supporting_text ? custom_styles.supporting_text : {}
          }
        >
          {supp_txt}
        </div>
        <div
          className={`${styles.accordion_content} ${isOpen ? styles.open : ""}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Accordion;
