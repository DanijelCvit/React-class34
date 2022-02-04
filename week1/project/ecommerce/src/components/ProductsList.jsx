import React from "react";
import products from "../fake-data/all-products.js";
import ProductCard from "./ProductCard.jsx";

const ProductsList = () => {
  return (
    <ul className="sm:flex sm:flex-wrap">
      {products.map((product) => (
        <li className="sm:w-1/2 lg:w-1/3 2xl:w-1/4" key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
