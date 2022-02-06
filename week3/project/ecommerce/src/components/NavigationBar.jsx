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
        <ul className="flex items-stretch space-x-1">
          {categories.map((categoryItem) => (
            <li key={categoryItem}>
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
