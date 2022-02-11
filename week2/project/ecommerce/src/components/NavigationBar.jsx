import React from "react";
import useFetch from "../hooks/useFetch.js";
import Button from "./Button.jsx";

const NavigationBar = ({ category, setCategory }) => {
  const {
    data: categories,
    errorMessage,
    isLoading,
  } = useFetch("https://fakestoreapi.com/products/categories");

  return (
    <nav>
      {isLoading && <p>Loading categories...</p>}
      {categories && (
        <ul className="grid gap-2 grid-cols-2 sm:grid-cols-none sm:flex">
          {categories.map((categoryItem) => (
            <li className="" key={categoryItem}>
              <Button
                category={category}
                setCategory={setCategory}
                categoryItem={categoryItem}
              />
            </li>
          ))}
        </ul>
      )}
      {errorMessage}
    </nav>
  );
};

export default NavigationBar;
