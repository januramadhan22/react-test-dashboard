import React from "react";
import { HiArrowUp } from "react-icons/hi";

function CardListProduct({ number, name, category, image, growed, sold }) {
  return (
    <div className="p-4 flex justify-between bg-transparent hover:bg-white rounded-xl border border-transparent hover:shadow-md hover:border hover:border-gray-100">
      <div className="flex gap-3">
        <h3 className="font-semibold">{number}</h3>
        <div className="w-[68px] h-[68px] rounded-md">
          <img
            className="object-cover aspect-square rounded-md"
            src={image}
            alt=""
          />
        </div>
        <div className="">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500 font-semibold">{category}</p>
          {growed && (
            <span className="text-green-600 font-medium flex items-center gap-1">
              <HiArrowUp /> +{growed} Product Sold
            </span>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">Total Sales:</p>
        <h3 className="text-blue-400 font-semibold">{sold} Sold</h3>
      </div>
    </div>
  );
}

export default CardListProduct;
