import React, { useContext } from "react";
import { FavoritesContext } from "../context/favoritesContext";

const FavoriteButton = ({ id }) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const ID = parseInt(id);

  const isFavorite = favorites.includes(ID);
  return (
    <>
      {isFavorite ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            removeFavorite(ID);
          }}
        >
          <i
            className="fas fa-heart fa-lg hover:cursor-pointer"
            aria-label={`favorite${ID}`}
          ></i>
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            addFavorite(ID);
          }}
        >
          <i
            className="far fa-heart fa-lg hover:cursor-pointer"
            aria-label={`favorite${ID}`}
          ></i>
        </button>
      )}
    </>
  );
};

export default FavoriteButton;
