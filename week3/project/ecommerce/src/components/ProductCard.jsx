import React, { useContext, useState } from "react";
import { favoritesContext } from "../context/favoritesContext";

const ProductCard = ({ product }) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(favoritesContext);

  const isFavorite = favorites.includes(product.id);

  return (
    <div className="text-center mt-6 relative">
      <img
        src={product.image}
        alt=""
        className="mx-auto mb-2 h-72"
        style={{ objectFit: "contain" }}
      />
      {isFavorite ? (
        <i
          onClick={(e) => {
            e.preventDefault();
            removeFavorite(product.id);
          }}
          className="fas fa-heart fa-lg absolute top-2 right-2"
        ></i>
      ) : (
        <i
          onClick={(e) => {
            e.preventDefault();
            addFavorite(product.id);
          }}
          className="far fa-heart fa-lg absolute top-2 right-2"
        ></i>
      )}
      <h2 className="text-ellipsis overflow-hidden whitespace-nowrap">
        {product.title}
      </h2>
    </div>
  );
};

export default ProductCard;
