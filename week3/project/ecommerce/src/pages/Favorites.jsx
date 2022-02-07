import React, { useContext } from "react";
import ProductsList from "../components/ProductsList";
import { favoritesContext } from "../context/favoritesContext";
import useFetch from "../hooks/useFetch";

const Favorites = () => {
  const { favorites } = useContext(favoritesContext);

  //   for (let i = 0; i < favorites.length; i++) {
  //     const {
  //       data: product,
  //       errorMessage,
  //       isLoading,
  //     } = useFetch(`https://fakestoreapi.com/products/${favId}`);
  //   }

  return (
    <div className="px-2">
      <h1 className="font-bold text-3xl mt-5 mb-5">Favorites</h1>
      {/* <ProductsList /> */}
    </div>
  );
};

export default Favorites;
