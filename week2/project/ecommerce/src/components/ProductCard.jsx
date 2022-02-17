import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => (
  <div className="text-center mt-6">
    <img
      src={product.image}
      alt={product.description}
      className="mx-auto mb-2 h-72 object-contain"
    />
    <h2 className="text-ellipsis overflow-hidden whitespace-nowrap">
      {product.title}
    </h2>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
