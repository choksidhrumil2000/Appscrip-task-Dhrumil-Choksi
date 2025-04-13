"use client";

import { useEffect, useState } from "react";
import Accordion from "../Accordian/Accordian";
import styles from "./FilterSection.module.css";

export default function FilterSection({
  custom_styles = {},
  filters = {},
  filter_setter_obj = {},
  suppText = "",
}) {
  const clearFilters = () => {
    filter_setter_obj.setFIlteredProductData(filter_setter_obj.productData);

    for (let i = 0; i < filters.category.length; i++) {
      filters.category[i].checked = false;
    }
    filters.newProduct.val = false;
    filters.inStock.val = false;
    filter_setter_obj.setFilters(filters);
    filter_setter_obj.setSuppText("All");
    filter_setter_obj.setSelectedCategory([]);
    filter_setter_obj.setSelectedOtherFilters([]);
  };
  const handleChange = (e) => {
    const curr_selected_arr = [...filter_setter_obj.selectedCategory];
    const other_selected_arr = [...filter_setter_obj.selectedOtherFilters];
    const filter_obj = JSON.parse(JSON.stringify(filters));
    if (
      e.target.name !== "newProduct" &&
      e.target.name !== "inStock" &&
      e.target.checked
    ) {
      curr_selected_arr.push(e.target.name);
      filter_obj.category[
        filter_obj.category.findIndex((item) => item.name === e.target.name)
      ].checked = e.target.checked;
    } else if (e.target.name === "newProduct" && e.target.checked) {
      other_selected_arr.push(e.target.name);
      filter_obj.newProduct.val = e.target.checked;
    } else if (e.target.name === "inStock" && e.target.checked) {
      other_selected_arr.push(e.target.name);
      filter_obj.inStock.val = e.target.checked;
    } else {
      let idx1 = curr_selected_arr.findIndex((item) => item === e.target.name);
      let idx_filter_obj = filter_obj.category.findIndex(
        (item) => item.name === e.target.name
      );
      if (idx1 !== -1 && idx_filter_obj !== -1) {
        curr_selected_arr.splice(idx1, 1);
        filter_obj.category[idx_filter_obj].checked = false;
      }
      let idx2 = other_selected_arr.findIndex((item) => item === e.target.name);
      if (idx2 !== -1) {
        other_selected_arr.splice(idx2, 1);
        filter_obj[e.target.name].val = false;
      }
    }
    filter_setter_obj.setSelectedCategory(curr_selected_arr);
    filter_setter_obj.setSuppText(
      curr_selected_arr.length !== 0 ? curr_selected_arr.toString() : "All"
    );
    filter_setter_obj.setSelectedOtherFilters(other_selected_arr);
    filter_setter_obj.setFilters(filter_obj);
    const products = filter_setter_obj.productData.filter((item) => {
      const matchesCategory =
        curr_selected_arr.length === 0 ||
        curr_selected_arr.some((cat) =>
          item.category.toLowerCase().includes(cat.toLowerCase())
        );

      const matchesNew =
        !other_selected_arr.includes("newProduct") || item.newProduct;
      const matchesStock =
        !other_selected_arr.includes("inStock") || !item.outOfStock;

      return matchesCategory && matchesNew && matchesStock;
    });
    filter_setter_obj.setIsLoading(true);
    if (products.length !== 0) {
      filter_setter_obj.setFIlteredProductData(products);
    } else {
      filter_setter_obj.setFIlteredProductData([]);
    }
    filter_setter_obj.setIsLoading(false);
  };

  return (
    <div>
      <Accordion
        title="Category"
        flag="filter-section"
        custom_styles={custom_styles}
        supp_txt={suppText}
      >
        <div>
          {filters.category.map((item, i) => {
            return (
              <div
                key={item + i}
                style={{ margin: "16px 0px", cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.val}
                  onChange={(e) => handleChange(e)}
                  style={{ scale: "1.5", cursor: "pointer" }}
                  checked={item.checked}
                />
                <label
                  style={{ cursor: "pointer" }}
                  for={item.val}
                  className={styles.label_style}
                >
                  {item.name}
                </label>
              </div>
            );
          })}
        </div>
      </Accordion>
      {
        <div>
          <div style={{ margin: "16px 0px" }}>
            <input
              type="checkbox"
              name={filters.newProduct.name}
              id={filters.newProduct.name}
              onChange={(e) => handleChange(e)}
              checked={filters.newProduct.val}
              style={{ scale: "1.5", cursor: "pointer" }}
            />
            <label
              style={{ cursor: "pointer" }}
              for={filters.newProduct.name}
              className={styles.label_style}
            >
              {filters.newProduct.name}
            </label>
          </div>
          <div style={{ margin: "16px 0px" }}>
            <input
              type="checkbox"
              name={filters.inStock.name}
              id={filters.inStock.name}
              onChange={(e) => handleChange(e)}
              style={{ scale: "1.5", cursor: "pointer" }}
              checked={filters.inStock.val}
            />
            <label
              style={{ cursor: "pointer" }}
              for={filters.inStock.name}
              className={styles.label_style}
            >
              {filters.inStock.name}
            </label>
          </div>
          <div>
            <p
              onClick={clearFilters}
              className={styles.label_style}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Clear Filters
            </p>
          </div>
        </div>
      }
    </div>
  );
}
