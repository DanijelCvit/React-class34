import React from "react";
import categories from "../fake-data/all-categories.js";
import Button from "./Button.jsx";

const NavigationBar = ({ category, setCategory }) => {
  return (
    <nav>
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
    </nav>
  );
};

export default NavigationBar;
