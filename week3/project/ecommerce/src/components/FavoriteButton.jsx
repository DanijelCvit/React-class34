import React, { useContext } from "react";
import { favoritesContext } from "../context/favoritesContext";

const FavoriteButton = ({ id }) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(favoritesContext);

  const ID = parseInt(id);

  const isFavorite = favorites.includes(ID);
  return (
    <>
      {isFavorite ? (
        <i
          onClick={(e) => {
            e.preventDefault();
            removeFavorite(ID);
          }}
          className="fas fa-heart fa-lg hover:cursor-pointer"
          data-testid={`favorite${ID}`}
        ></i>
      ) : (
        <i
          onClick={(e) => {
            e.preventDefault();
            addFavorite(ID);
          }}
          className="far fa-heart fa-lg hover:cursor-pointer"
          data-testid={`favorite${ID}`}
        ></i>
      )}
    </>
  );
};

export default FavoriteButton;
