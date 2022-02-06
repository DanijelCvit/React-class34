import React from "react";

const Button = ({ categoryItem, setCategory, category }) => {
  return (
    <div
      onClick={() => setCategory(categoryItem)}
      className={`cursor-pointer h-full text-left px-4 py-2  font-bold ${
        category === categoryItem ? "bg-gray-400" : "bg-gray-200"
      } hover:bg-gray-300`}
    >
      {categoryItem}
    </div>
  );
};

export default Button;
