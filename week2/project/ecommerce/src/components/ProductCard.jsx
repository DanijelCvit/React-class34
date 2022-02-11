import React from "react";

const ProductCard = ({ product }) => (
  <div className="text-center mt-6">
    <img
      src={product.image}
      alt=""
      className="mx-auto mb-2 h-72 object-contain"
    />
    <h2 className="text-ellipsis overflow-hidden whitespace-nowrap">
      {product.title}
    </h2>
  </div>
);

export default ProductCard;