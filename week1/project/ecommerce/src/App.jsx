import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import ProductsList from "./components/ProductsList";

function App() {
  const [category, setCategory] = useState("all");

  return (
    <div className="App px-2">
      <h1 className="font-bold text-3xl mt-5 mb-5">Products</h1>
      <NavigationBar category={category} setCategory={setCategory} />
      <ProductsList category={category} />
    </div>
  );
}

export default App;
