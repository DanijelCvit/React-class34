import React from "react";
import PropTypes from "prop-types";

const Button = ({ categoryItem, setSelectedCategory, selectedCategory }) => (
  <button
    onClick={() => setSelectedCategory(categoryItem)}
    className={`text-center w-full  cursor-pointer h-full px-4 py-2  font-bold ${
      selectedCategory === categoryItem ? "bg-gray-400" : "bg-gray-200"
    } hover:bg-gray-300`}
  >
    {categoryItem}
  </button>
);

Button.propTypes = {
  selectedCategory: PropTypes.string,
  categoryItem: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Button;
