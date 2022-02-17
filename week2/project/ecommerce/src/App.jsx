import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import ProductsList from "./components/ProductsList";
import useFetch from "./hooks/useFetch";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  let url = "https://fakestoreapi.com/products";

  if (selectedCategory !== null) {
    url += `/category/${selectedCategory}`;
  }

  const { data: products, errorMessage, isLoading } = useFetch(url);

  return (
    <div className="px-2">
      <h1 className="font-bold text-3xl mt-5 mb-5">Products</h1>
      <NavigationBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductsList
        products={products}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
