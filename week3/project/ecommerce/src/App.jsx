import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Favorites from "./pages/Favorites";
import ProductDetails from "./pages/ProductDetails";
import { favoritesContext } from "./context/favoritesContext";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id) => {
    console.log(id, favorites);
    setFavorites((prevFavorites) => [...prevFavorites, id]);
  };

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((favId) => favId !== id);

    setFavorites(newFavorites);
  };

  return (
    <Router>
      <nav className=" absolute top-7 right-0 pr-2">
        <NavLink to="/" activeclassname="active">
          Products
        </NavLink>
        <NavLink className="ml-1" to="/favorites" activeclassname="active">
          Favorites
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <favoritesContext.Provider
              value={{ favorites, addFavorite, removeFavorite }}
            >
              <Home />
            </favoritesContext.Provider>
          }
        />
        <Route
          path="/products/:id"
          element={
            <favoritesContext.Provider
              value={{ favorites, addFavorite, removeFavorite }}
            >
              <ProductDetails />
            </favoritesContext.Provider>
          }
        />
        <Route
          path="/favorites"
          element={
            <favoritesContext.Provider
              value={{ favorites, addFavorite, removeFavorite }}
            >
              <Favorites />
            </favoritesContext.Provider>
          }
        />
        <Route
          path="*"
          element={
            <favoritesContext.Provider
              value={{ favorites, addFavorite, removeFavorite }}
            >
              <Home />
            </favoritesContext.Provider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
