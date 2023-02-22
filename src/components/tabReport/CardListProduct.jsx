import React from "react";
import { HiArrowUp } from "react-icons/hi";

function CardListProduct({ number, name, category, image, growed, sold }) {
  return (
    <div className="p-4 flex flex-col md:flex-row justify-between bg-transparent hover:bg-white rounded-xl border border-transparent hover:shadow-md hover:border hover:border-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <h3 className="font-semibold">{number}</h3>
        <div className="w-44 md:w-[68px] md:h-[68px] rounded-md">
          <img
            className="object-cover aspect-square rounded-md"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500 font-semibold">{category}</p>
          {growed && (
            <span className="text-green-600 font-medium flex items-center gap-1">
              <HiArrowUp /> +{growed} Product Sold
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-row md:flex-col items-baseline md:items-start justify-center md:justify-start gap-3 md:gap-0">
        <p className="text-sm text-gray-500 font-medium">Total Sales:</p>
        <h3 className="text-blue-400 font-semibold">{sold} Sold</h3>
      </div>
    </div>
  );
}

export default CardListProduct;
