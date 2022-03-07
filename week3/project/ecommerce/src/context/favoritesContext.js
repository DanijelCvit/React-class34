import { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id) => {
    setFavorites((prevFavorites) => [...prevFavorites, id]);
  };

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((favId) => favId !== id);

    setFavorites(newFavorites);
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
