import React from "react";
import PropTypes from "prop-types";

const Button = ({ categoryItem, setCategory, category }) => (
  <button
    onClick={() => setCategory(categoryItem)}
    className={`text-center w-full  cursor-pointer h-full px-4 py-2  font-bold ${
      category === categoryItem ? "bg-gray-400" : "bg-gray-200"
    } hover:bg-gray-300`}
  >
    {categoryItem}
  </button>
);

Button.propTypes = {
  category: PropTypes.string,
  categoryItem: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Button;
