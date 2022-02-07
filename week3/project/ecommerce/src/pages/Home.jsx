import React from "react";
import ProductsList from "../components/ProductsList";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";

const Home = () => {
  const [category, setCategory] = useState(null);

  let url = "https://fakestoreapi.com/products";

  if (category !== null) {
    url += `/category/${category}`;
  }

  const { data: products, errorMessage, isLoading } = useFetch(url);

  return (
    <div className="px-2">
      <h1 className="font-bold text-3xl mt-5 mb-5">Products</h1>
      <NavigationBar category={category} setCategory={setCategory} />
      {isLoading && <Spinner />}
      {products && <ProductsList products={products} />}
      {errorMessage}
    </div>
  );
};

export default Home;
