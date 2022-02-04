import React from "react";
import categories from "../fake-data/all-categories.js";

const NavigationBar = ({ category, setCategory }) => {
  return (
    <nav>
      <ul className="flex sm:w-full space-x-1">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setCategory(cat)}
              className={`text-left px-4 py-2  font-bold ${
                category === cat ? "bg-gray-400" : "bg-gray-200"
              } hover:bg-gray-300`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
