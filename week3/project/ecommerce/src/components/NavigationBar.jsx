import React from "react";
import useFetch from "../hooks/useFetch.js";
import CategoryButton from "./CategoryButton.jsx";
import PropTypes from "prop-types";

const NavigationBar = ({ selectedCategory, setSelectedCategory }) => {
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
            <li key={categoryItem}>
              <CategoryButton
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
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

NavigationBar.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default NavigationBar;
