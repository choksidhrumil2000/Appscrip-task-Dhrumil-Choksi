"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./CustomDropDown.module.css";
import arrow_left from "../../Assets/arrow-left.png";
import right from "../../Assets/arrow.png";
import Image from "next/image";

export default function CustomDropDown({
  options,
  placeholder = "Select an option",
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].name);
  const dropdownRef = useRef();

  const handleSelect = (option) => {
    setSelected(option.name);
    setIsOpen(false);
    onSelect?.(option.val);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles["custom-dropdown"]} ref={dropdownRef}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        <p>{selected}</p>
        <Image src={arrow_left} alt="Arrow" width={20} height={20} />
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={`${styles.option} ${
                selected === opt.name ? styles.option_selected : ""
              }`}
              onClick={() => handleSelect(opt)}
            >
              {selected === opt.name ? (
                <Image src={right} alt="selected" width={20} height={20} />
              ) : (
                ""
              )}
              {opt.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
