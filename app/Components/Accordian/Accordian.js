import React, { Children, useEffect, useState } from "react";
import footer_styles from "../Footer/Footer.module.css";
import styles from "./Accordian.module.css";
import arrow from "../../Assets/arrow-right.png";

import Image from "next/image";

const Accordion = ({ title = "Accordion Title", children, flag, open }) => {
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
      <div className={styles.accordion}>
        {flag !== "nav-icon" && (
          <div className={styles.accordion_header} onClick={toggleAccordion}>
            <span className={footer_styles.footer_section_2_heading}>
              {title}
            </span>
            <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
              <Image src={arrow} alt="arrow" width={20} height={20} />
            </span>
          </div>
        )}
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
