import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const ProductsList = ({ products, children }) => {
  return (
    <div>
      <ul className="sm:flex sm:flex-wrap">
        {products.map((product) => (
          <li className="sm:w-1/2 lg:w-1/3 2xl:w-1/4 px-2" key={product.id}>
            <Link to={`/products/${product.id}`}>
              {React.cloneElement(children, { product })}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
  children: PropTypes.element,
};

export default ProductsList;
