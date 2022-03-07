import React, { useContext } from "react";
import ProductsList from "../components/ProductsList";
import Spinner from "../components/Spinner";
import { FavoritesContext } from "../context/favoritesContext.js";
import useFetch from "../hooks/useFetch";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  const {
    data: products,
    isLoading,
    errorMessage,
  } = useFetch(`https://fakestoreapi.com/products/`, JSON.stringify(favorites));

  return (
    <div className="px-2">
      <h1 className="font-bold text-3xl mt-5 mb-5">Favorites</h1>
      {products && <ProductsList products={products} />}
      {isLoading && <Spinner />}
      {errorMessage && <p>{errorMessage}</p>}
      {!products && !isLoading && <p>No favorites yet</p>}
    </div>
  );
};

export default Favorites;
