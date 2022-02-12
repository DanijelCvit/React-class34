import React from "react";
import useFetch from "../hooks/useFetch.js";
import Button from "./Button.jsx";
import PropTypes from "prop-types";

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

NavigationBar.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func.isRequired,
};

export default NavigationBar;
