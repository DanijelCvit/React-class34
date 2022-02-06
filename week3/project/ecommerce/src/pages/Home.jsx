import React from "react";
import ProductsList from "../components/ProductsList";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState(null);

  return (
    <div className="px-2">
      <h1 className="font-bold text-3xl mt-5 mb-5">Products</h1>
      <NavigationBar category={category} setCategory={setCategory} />
      <ProductsList category={category} />
    </div>
  );
};

export default Home;
