import React from "react";
import products from "../fake-data/all-products.js";
import ProductCard from "./ProductCard.jsx";

const ProductsList = ({ category }) => {
  const filterList = () => {
    if (category === "all") {
      return products;
    }
    return products.filter(
      (product) => product.category === category.slice(5).trim()
    );
  };
  return (
    <ul className="sm:flex sm:flex-wrap">
      {filterList().map((product) => (
        <li className="sm:w-1/2 lg:w-1/3 2xl:w-1/4 px-2" key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
