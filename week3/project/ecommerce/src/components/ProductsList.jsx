import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => (
  <div>
    <ul className="sm:flex sm:flex-wrap">
      {products.map((product) => (
        <li
          data-testid={`category${product.category}`}
          className="sm:w-1/2 lg:w-1/3 2xl:w-1/4 px-2"
          key={product.id}
        >
          <Link to={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default ProductsList;
