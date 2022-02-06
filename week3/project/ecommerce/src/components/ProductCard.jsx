import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="text-center mt-6 relative">
      <img
        src={product.image}
        alt=""
        className="mx-auto mb-2 h-72"
        style={{ objectFit: "contain" }}
      />
      <i className="far fa-heart fa-lg absolute top-2 right-2"></i>
      <i className="fas fa-heart fa-lg absolute top-2 right-2"></i>
      <h2 className="text-ellipsis overflow-hidden whitespace-nowrap">
        {product.title}
      </h2>
    </div>
  );
};

export default ProductCard;
