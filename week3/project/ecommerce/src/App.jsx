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

function App() {
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
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
