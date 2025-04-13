"use client";

import { useEffect, useState } from "react";
import styles from "./ProductSection.module.css";
import ProductNode from "../ProductNode/ProductNode";
import arrow from "../../Assets/arrow.png";
import CustomDropdown from "../CustomDropDown/CustomDropDown";
import CustomDropDown from "../CustomDropDown/CustomDropDown";
import FilterSection from "../FilterSection/FilterSection";

export default function ProductSection({ data }) {
  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFIlteredProductData] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState("sort");

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedOtherFilters, setSelectedOtherFilters] = useState([]);
  const [suppText, setSuppText] = useState("All");
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const sort_arr = [
    { name: "Recommanded", val: "sort" },
    { name: "Price:Low to HIGH", val: "LTH" },
    { name: "Price: High to Low", val: "HTL" },
  ];

  const filter_Setter_obj = {
    selectedCategory,
    setSelectedCategory,
    suppText,
    setSuppText,
    selectedOtherFilters,
    setSelectedOtherFilters,
    filteredProductData,
    setFIlteredProductData,
    productData,
    setFilters,
    setIsLoading,
  };

  const custom_styles = {
    heading: {
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "100%",
      textTransform: "uppercase",
      color: "rgba(37, 32, 32, 1)",
    },
    arrow: {
      color: "rgba(41, 45, 50, 1)",
      transition: "transform 0.3s ease",
    },
    supporting_text: {
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "100%",
      color: "rgba(37, 32, 32, 1)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      padding: "10px 0px",
    },
    accordian: {
      borderBottom: "1px solid rgba(229, 229, 229, 1)",
      maxWidth: "100%",
    },
  };

  const obj = {
    category: [
      {
        name: "Men",
        val: "men",
        checked: false,
      },
      {
        name: "Women",
        val: "women",
        checked: false,
      },
      {
        name: "Jewelery",
        val: "jewelery",
        checked: false,
      },
      {
        name: "Electronics",
        val: "electronics",
        checked: false,
      },
    ],
    newProduct: {
      name: "newProduct",
      val: false,
    },
    inStock: {
      name: "inStock",
      val: false,
    },
  };

  useEffect(() => {
    setIsLoading(true);
    const myProductsData = addPropertiesToData();
    setProductData(myProductsData);
    setFIlteredProductData(myProductsData);
    setIsLoading(false);
    setFilters(obj);
  }, []);

  function addPropertiesToData() {
    const myData = [...data];
    myData.forEach((item, i) => {
      item.liked = false;
      item.newProduct = false;
      item.outOfStock = false;
      if (i === 3) {
        item.newProduct = true;
      }
      if (i === 4) {
        item.outOfStock = true;
      }
      if (i === 5) {
        item.liked = true;
      }
    });
    return myData;
  }

  const handleLike = (i, isliked) => {
    const myData = [...filteredProductData];
    myData[i].liked = isliked;
    setIsLoading(true);
    setFIlteredProductData(myData);
    setProductData(myData);
    setIsLoading(false);
  };

  const handleSort = (val) => {
    setSelectedSort(val);
    let myData = [...filteredProductData];
    switch (val) {
      case "LTH":
        myData.sort((p1, p2) => p1.price - p2.price);
        break;
      case "HTL":
        myData.sort((p1, p2) => p2.price - p1.price);
        break;
      default: {
        myData = [...productData];
      }
    }
    setIsLoading(true);
    setFIlteredProductData(myData);
    setIsLoading(false);
  };

  return (
    <div className={styles.mainDiv}>
      {/* Filter + Sort  */}
      <div className={`d_flex ${styles.filter_sort_div}`}>
        <div
          className={`d_flex ${styles.hide_content}`}
          style={{ alignItems: "center", gap: "16px" }}
        >
          <p className={`${styles.items}`}>
            {filteredProductData.length} ITEMS
          </p>
          <p
            style={{ cursor: "pointer" }}
            className={styles.show_filter_text}
            onClick={() => setShowFilters((prev) => !prev)}
          >
            <span
              style={{ textDecoration: "none" }}
              className={`${styles.span_item} ${
                showFilters ? styles.open : ""
              }`}
            >
              {">  "}
            </span>
            {!showFilters ? "Show Filters" : "Hide Filters"}
          </p>
        </div>
        <div
          style={{ cursor: "pointer" }}
          className={`${styles.show_content_mobile} ${styles.filters}`}
          onClick={() => setShowFilters((prev) => !prev)}
        >
          FILTERS
        </div>
        <CustomDropDown options={sort_arr} onSelect={handleSort} />
      </div>
      {/* Filter + Sort Ends */}
      {/* Filter + Products Section */}
      <div style={{ width: "100%", margin: "32px 0px" }} className={`d_flex`}>
        {/* Filter Section */}
        {showFilters && (
          <div
            style={{ width: "30%" }}
            className={showFilters ? styles.show_filters_mobile : ""}
          >
            <FilterSection
              custom_styles={custom_styles}
              suppText={suppText}
              filters={filters}
              filter_setter_obj={filter_Setter_obj}
            />
          </div>
        )}
        {/* Filter Section Ends*/}

        {/* Product Section */}
        <div style={showFilters ? { width: "70%" } : { width: "100%" }}>
          <div
            className={`d_grid ${styles.grid_container} ${
              showFilters ? styles.grid_adjustments_with_filters : ""
            }`}
            style={
              showFilters ? { gridTemplateColumns: "repeat(3,33.33%)" } : {}
            }
          >
            {filteredProductData.length !== 0 &&
              filteredProductData.map((item, i) => {
                return (
                  <ProductNode
                    key={item + i}
                    productDetails={item}
                    idx={i}
                    handleLike={handleLike}
                  />
                );
              })}
          </div>
          {(isLoading || filteredProductData.length === 0) && (
            <div
              style={{
                background: "rgba(255,255,255,0.3)",
                position: "relative",
                width: "100%",
                height: "50vh",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "10px",
                }}
              >
                {isLoading
                  ? "Loading.............."
                  : "No Products Data Found........"}
              </div>
            </div>
          )}
          {/* Product Section Ends*/}
        </div>
      </div>
      {/* Filter + Products Section Ends */}
    </div>
  );
}
