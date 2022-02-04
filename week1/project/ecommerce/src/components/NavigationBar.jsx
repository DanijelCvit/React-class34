import React from "react";
import categories from "../fake-data/all-categories.js";

const NavigationBar = ({ category, setCategory }) => {
  return (
    <nav>
      <ul className="flex items-stretch space-x-1">
        {categories.map((categoryItem) => (
          <li className="bg-red-100" key={categoryItem}>
            <button
              onClick={() => setCategory(categoryItem)}
              className={`h-full text-left px-4 py-2  font-bold ${
                category === categoryItem ? "bg-gray-400" : "bg-gray-200"
              } hover:bg-gray-300`}
            >
              {categoryItem}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
