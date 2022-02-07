import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import ProductsList from "./components/ProductsList";
import allProducts from "./fake-data/all-products.js";

function App() {
  const [category, setCategory] = useState("all");

  const filterList = () => {
    if (category === "all") {
      return allProducts;
    }
    return allProducts.filter(
      (product) => product.category === category.slice(5).trim()
    );
  };

  const products = filterList();

  return (
    <div className="App px-2">
      <h1 className="font-bold text-3xl mt-5 mb-5">Products</h1>
      <NavigationBar category={category} setCategory={setCategory} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
