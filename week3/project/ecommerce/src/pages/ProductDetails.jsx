import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import useFetch from "../hooks/useFetch";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    data: products,
    errorMessage,
    isLoading,
  } = useFetch(`https://fakestoreapi.com/products/`, JSON.stringify([id]));

  console.log(products);

  return (
    <div className="container mx-auto px-2">
      {isLoading && <Spinner />}
      {products && (
        <div className="sm:flex mt-20">
          <div className="sm:w-1/2">
            <img src={products[0].image} alt="" />
          </div>
          <div className="px-4 sm:px-0 sm:w-1/2 sm:pl-6">
            <h2 className="font-bold text-2xl mt-4">{products[0].title}</h2>
            <div className="flex justify-between mt-4 mb-2">
              <div className="font-semibold text-xl">
                &euro; {products[0].price}{" "}
                <span className="text-gray-400 text-sm">inclusief BTW</span>
              </div>
              <div className="mb-2">
                <span> {products[0].rating.rate}</span>
                <span className="text-gray-400">
                  {" "}
                  {products[0].rating.count}
                </span>
              </div>
            </div>
            <p className="mb-4">
              {products[0].description
                .charAt(0)
                .toUpperCase()
                .concat(products[0].description.slice(1))}
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
