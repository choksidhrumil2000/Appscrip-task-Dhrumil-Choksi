"use client";
import styles from "./Footer.module.css";
import Image from "next/image";
import us from "../../Assets/us.png";
import linkedin from "../../Assets/linkedin.png";
import insta from "../../Assets/Insta.png";
import gpay from "../../Assets/gpay.png";
import applepay from "../../Assets/ApplePay.png";
import dpay from "../../Assets/DPay.png";
import amex from "../../Assets/Amex.png";
import master from "../../Assets/Master.png";
import paypal from "../../Assets/paypal.png";
import Accordion from "../Accordian/Accordian";

export default function Footer() {
  const MettaMuse = [
    "About Us",
    "Stories",
    "Artisans",
    "Boutics",
    "Contact Us",
    "Eu Comliance Docs",
  ];

  const QuickLinks = [
    "Orders & Shipping",
    "Join/Login as a Seller",
    "Payment & Pricing",
    "Return & Refunds",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ];
  return (
    <div className={styles.footer_main_div}>
      {/* Footer Section 1 */}
      <div className={`${"d_flex"} ${styles.footer_section_1}`}>
        {/* Footer Sub Section 1 */}
        <div
          className={` d_flex ${styles.footer_sub_section_1} ${styles.footer_sec1_sub_section_1}`}
        >
          <p className={styles.footer_heading}>Be the first to know</p>
          <p className={styles.footer_sub_line}>
            Sign up for updates from mettā muse.
          </p>
          <div className={styles.input_div}>
            <input
              type="text"
              placeholder="Enter Your e-mail..."
              className={styles.text_inp}
            />
            <button className={styles.btn}>Subscribe</button>
          </div>
          <hr className={`${styles.hr_line} ${styles.show_line}`} />
        </div>
        {/* Footer Sub Section 2 */}
        <div
          className={`${styles.footer_sub_section_2} ${styles.footer_sec1_sub_section_2}`}
        >
          <p
            className={`${styles.footer_heading} ${styles.footer_heading_contact_us}`}
          >
            <span className={styles.show_line}>CALL US</span>
            <span className={styles.hide_content}>CONTACT US</span>
          </p>
          <div className={`d_flex ${styles.footer_sub_section_contact_us}`}>
            <p className={styles.footer_sub_line}>+44 221 133 5360</p>
            
            <p className={styles.footer_sub_line}><span style={{ color: "white" }} className={`${styles.show_diamond}`}>
              ♦{" "}
            </span>customercare@mettamuse.com</p>
          </div>
          <hr
            style={{ marginTop: "16px" }}
            className={`${styles.hr_line} ${styles.show_line}`}
          />
          <p style={{ marginTop: "24px" }} className={styles.footer_heading}>
            Currency
          </p>
          <div className={`d_flex ${styles.footer_sub_section_currency}`}>
            <Image src={us} alt="usa" width={24} height={24} />
            <span className={styles.currency}>♦ USD</span>
          </div>
          <p className={`${styles.footer_text} ${styles.hide_content}`}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr className={`${styles.hr_line} ${styles.margin_top_mobile}`} />
      {/* Footer Section 2 */}
      <div
        className={` d_flex ${styles.footer_section_2} ${styles.hide_content}`}
      >
        {/* MettaMuse */}
        <div
          className={`d_flex ${styles.footer_sub_section_1} ${styles.footer_sec2_sub_section_1} ${styles.hide_content}`}
        >
          <p className={styles.footer_section_2_heading}>mettā muse</p>
          {MettaMuse.map((item, i) => {
            return (
              <div key={item + i}>
                {" "}
                <a href="#" className={styles.footer_section_2_links}>
                  {item}
                </a>
              </div>
            );
          })}
        </div>

        {/* Quick Links */}
        <div
          className={`d_flex ${styles.footer_sub_section_2} ${styles.footer_sec2_sub_section_2} ${styles.hide_content}`}
        >
          <p className={styles.footer_section_2_heading}>Quick Links</p>
          {QuickLinks.map((item, i) => {
            return (
              <div key={item + i}>
                <a href="#" className={styles.footer_section_2_links}>
                  {item}
                </a>
              </div>
            );
          })}
        </div>

        {/* Third Sub Section */}
        <div className={`${styles.footer_sec2_sub_section_3}`}>
          {/* Follow Us Section */}
          <div
            className={`d_flex ${styles.footer_follow_section}  ${styles.hide_content}`}
          >
            <p className={styles.footer_section_2_heading}>Follow Us</p>
            <p>
              <Image src={insta} alt="instagram" width={32} height={32} />
              <Image
                src={linkedin}
                alt="linkedin"
                width={32}
                height={32}
                style={{ marginLeft: "8px" }}
              />
            </p>
          </div>
          {/* Footer MettaMuse Accepts Section */}
          <div style={{ marginTop: "56px" }} className={styles.hide_content}>
            <p className={styles.footer_section_2_heading}>
              mettā muse Accepts
            </p>
            <div className={`d_flex ${styles.footer_section_2_pay}`}>
              <Image src={gpay} alt="gpay" width={56} height={35} />
              <Image src={master} alt="master" width={56} height={35} />
              <Image src={paypal} alt="paypal" width={56} height={35} />
              <Image src={amex} alt="amex" width={56} height={35} />
              <Image src={applepay} alt="applepay" width={56} height={35} />
              <Image src={dpay} alt="dpay" width={56} height={35} />
            </div>
          </div>
        </div>
      </div>
      {/* Accordian Section */}
      <div className={styles.show_line}>
        <Accordion title="mettā muse">
          <div className={`d_flex ${styles.footer_sub_section_1}`}>
            {MettaMuse.map((item, i) => {
              return (
                <div key={item + i + i}>
                  {" "}
                  <a href="#" className={styles.footer_section_2_links}>
                    {item}
                  </a>
                </div>
              );
            })}
          </div>
        </Accordion>

        <Accordion title="Quick Links">
          <div className={`d_flex ${styles.footer_sub_section_1}`}>
            {QuickLinks.map((item, i) => {
              return (
                <div key={item + i + i}>
                  {" "}
                  <a href="#" className={styles.footer_section_2_links}>
                    {item}
                  </a>
                </div>
              );
            })}
          </div>
        </Accordion>

        <Accordion title="Follow US">
          <div className={`d_flex ${styles.footer_follow_section}`}>
            <p>
              <Image src={insta} alt="instagram" width={32} height={32} />
              <Image
                src={linkedin}
                alt="linkedin"
                width={32}
                height={32}
                style={{ marginLeft: "8px" }}
              />
            </p>
          </div>
        </Accordion>
      </div>
      {/* Accordian Section Ends */}
      {/* Footer MettaMuse Accepts Section Mobile */}
      <div style={{ marginTop: "16px" }} className={styles.show_line}>
        <p className={styles.footer_section_2_heading}>mettā muse Accepts</p>
        <div className={`d_flex ${styles.footer_section_2_pay}`}>
          <Image src={gpay} alt="gpay" width={56} height={35} />
          <Image src={master} alt="master" width={56} height={35} />
          <Image src={paypal} alt="paypal" width={56} height={35} />
          <Image src={amex} alt="amex" width={56} height={35} />
          <Image src={applepay} alt="applepay" width={56} height={35} />
          <Image src={dpay} alt="dpay" width={56} height={35} />
        </div>
      </div>
      {/* Footer Section 3 */}
      <p
        style={{ textAlign: "center", marginTop: "32px" }}
        className={styles.footer_section_2_links}
      >
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
}
