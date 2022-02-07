import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import useFetch from "../hooks/useFetch";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    data: product,
    errorMessage,
    isLoading,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <div className="container mx-auto px-2">
      {isLoading && <Spinner />}
      {product && (
        <div className="sm:flex mt-20">
          <div className="sm:w-1/2">
            <img src={product.image} alt="" />
          </div>
          <div className="px-4 sm:px-0 sm:w-1/2 sm:pl-6">
            <h2 className="font-bold text-2xl mt-4">{product.title}</h2>
            <div className="flex justify-between mt-4 mb-2">
              <div className="font-semibold text-xl">
                &euro; {product.price}{" "}
                <span className="text-gray-400 text-sm">inclusief BTW</span>
              </div>
              <div className="mb-2">
                <span> {product.rating.rate}</span>
                <span className="text-gray-400"> {product.rating.count}</span>
              </div>
            </div>
            <p className="mb-4">
              {product.description
                .charAt(0)
                .toUpperCase()
                .concat(product.description.slice(1))}
            </p>
            <p></p>
          </div>
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default ProductDetails;
