import React, { useContext } from "react";
import Favorite from "../components/Favorite";
import ProductsList from "../components/ProductsList";
import { favoritesContext } from "../context/favoritesContext";

const Favorites = () => {
  const { favorites } = useContext(favoritesContext);
  const products = favorites.map((favorite) => ({
    id: favorite,
  }));

  return (
    <div className="px-2">
      <h1 className="font-bold text-3xl mt-5 mb-5">Favorites</h1>
      <ProductsList products={products}>
        <Favorite />
      </ProductsList>
    </div>
  );
};

export default Favorites;
