"use client";

import styles from "./Header.module.css";

import icon1 from "../../Assets/icon1.png";
import heart from "../../Assets/heart.png";
import search from "../../Assets/search-normal.png";
import profile from "../../Assets/profile.png";
import logo from "../../Assets/Logo.png";
import shopping_bag from "../../Assets/shopping-bag.png";
import hamBurger from "../../Assets/solar_hamburger-menu-linear.png";

import Image from "next/image";
import Accordion from "../Accordian/Accordian";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const myLinks = ["Shop", "Skills", "Stories", "About", "Contact Us"];
  return (
    <div>
      {/* Heading Line */}
      <div className={`${"d_flex"} ${styles.heading_line_div}`}>
        <p className={`${styles.heading_line} ${"d_flex"}`}>
          <Image src={icon1} alt="icon1" width={16} height={16} /> Lorem ipsum
          dolor
        </p>

        <p
          className={`${styles.heading_line} ${"d_flex"} ${
            styles.hide_content
          }`}
        >
          <Image src={icon1} alt="icon1" width={16} height={16} /> Lorem ipsum
          dolor
        </p>

        <p
          className={`${styles.heading_line} ${"d_flex"} ${
            styles.hide_content
          }`}
        >
          <Image src={icon1} alt="icon1" width={16} height={16} /> Lorem ipsum
          dolor
        </p>
      </div>
      <nav className={styles.navbar}>
        <div className={`d_flex ${styles.nav_section_1}`}>
          <div>
            <Image
              src={hamBurger}
              alt="hamburger"
              width={36}
              height={36}
              className={styles.menu}
              onClick={() => setOpen((prev) => !prev)}
            />
            <Image src={logo} alt="Company_Logo" width={36} height={36} />
          </div>
          <div className={styles.logo_text}>LOGO</div>
          <div className={`d_flex ${styles.icon_section}`}>
            <Image src={search} alt="search" width={24} height={24} />
            <Image src={heart} alt="heart" width={24} height={24} />
            <Image
              src={shopping_bag}
              alt="shopping_bag"
              width={24}
              height={24}
            />
            <Image
              src={profile}
              alt="profile"
              className={styles.hide_content}
              width={24}
              height={24}
            />
            <select
              className={`${styles.select_inp} ${styles.hide_content}`}
              disabled
            >
              <option value="" selected>
                ENG
              </option>
            </select>
          </div>
        </div>
        {/* Links Section */}
        <div
          className={`d_flex ${styles.nav_section_2} ${styles.hide_content}`}
        >
          <div className={`d_flex ${styles.nav_sub_section}`}>
            {myLinks.map((item, i) => (
              <a href="#" key={item + i} className={styles.links}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {/* On Mobile Links */}
      <Accordion flag="nav-icon" open={open}>
        <div>
          {myLinks.map((item, i) => (
            <div key={item + i} className={styles.mobile_links}>
              <a href="#" className={styles.links}>
                {item}
              </a>
              <hr className={styles.hr_line} />
            </div>
          ))}
        </div>
      </Accordion>
      <div className={styles.links_track_div}>
        <p className={styles.links_track_1}>
          HOME | <span className={styles.links_track_2}>SHOP</span>
        </p>
      </div>
    </div>
  );
}
