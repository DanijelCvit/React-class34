import React from "react";

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

export default Button;