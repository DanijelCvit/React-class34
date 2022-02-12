import React from "react";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const Favorite = ({ product }) => {
  const { data, isLoading, errorMessage } = useFetch(
    `https://fakestoreapi.com/products/${product.id}`
  );
  return (
    <>
      {data && <ProductCard product={data} />}
      {isLoading && <Spinner />}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default Favorite;
