

import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // Toggle the index
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 shadow-2xl p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold transition-all hover:text-green-400">
            {data?.title} ({data?.itemCards?.length || 0})
          </span>
          <span className="transition-all hover:text-green-400">
            {showItems ? "∧" : "∨"}
          </span>
        </div>

        {/* Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
