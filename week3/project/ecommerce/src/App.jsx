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
      <favoritesContext.Provider
        value={{ favorites, addFavorite, removeFavorite }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </favoritesContext.Provider>
    </Router>
  );
}

export default App;
