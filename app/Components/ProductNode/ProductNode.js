"use client";

import styles from "./ProductNode.module.css";
import Image from "next/image";
import heart from "../../Assets/heart.png";
import filled_heart from "../../Assets/filled_heart.png";
import { useEffect, useState } from "react";

export default function ProductNode({ productDetails, handleLike, idx }) {
  return (
    <div className={`d_flex ${styles.mainDiv}`}>
      <div style={{ position: "relative" }}>
        <img
          src={productDetails.image}
          className={styles.img_mobile}
          style={productDetails.outOfStock ? { opacity: "0.3" } : {}}
          alt={productDetails.title}
          width="100%"
          height={399}
        />
        <div
          style={
            productDetails.newProduct
              ? { display: "block" }
              : { display: "none" }
          }
          className={`${styles.newProduct}`}
        >
          New Product
        </div>
        <div
          style={
            productDetails.outOfStock
              ? { display: "block" }
              : { display: "none" }
          }
          className={`${styles.outOfStock}`}
        >
          Out OF Stock
        </div>
      </div>
      <div
        className={"d_flex"}
        style={{
          alignItems: "flex-end",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          className={`d_flex`}
          style={{ flexDirection: "column", gap: "8px", width: "80%" }}
        >
          <p className={styles.product_title}>
            {productDetails.title ? productDetails.title : "Product Name"}
          </p>
          <p className={styles.link}>
            <span style={{ textDecoration: "underline" }}>Sign in</span> or
            Create an account to see pricing
          </p>
        </div>
        <div>
          <Image
            src={!productDetails.liked ? heart : filled_heart}
            alt="heart"
            width={24}
            height={24}
            onClick={() => handleLike(idx, !productDetails.liked)}
          />
        </div>
      </div>
    </div>
  );
}
