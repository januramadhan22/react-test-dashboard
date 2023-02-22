import React, { useState } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import {
  HiShoppingCart,
  HiOutlineDownload,
  HiOutlineSearch,
} from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import CardListProduct from "./CardListProduct";

function TopFavorite() {
  const [topSales, setTopSales] = useState(true);
  const [topRating, setTopRating] = useState(false);
  const pages = [1, 2, 3, 4, 5];

  const resumeDatas = [
    { id: 1, title: "Service Income", total: "15000000" },
    { id: 2, title: "Store Income", total: "25000000" },
    { id: 3, title: "Grooming Reservation", total: "1.250" },
    { id: 4, title: "Hotel Income", total: "1.250" },
    { id: 5, title: "Total Product Sold", total: "1.250" },
  ];

  const productDatas = [
    {
      id: 1,
      name: "Toast Bread",
      category: "Foods",
      image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      growed: 25,
      sold: 1250,
    },
    {
      id: 2,
      name: "Toast Bread",
      category: "Foods",
      image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      growed: 25,
      sold: 1250,
    },
    {
      id: 3,
      name: "Toast Bread",
      category: "Foods",
      image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      growed: null,
      sold: 1250,
    },
    {
      id: 4,
      name: "Toast Bread",
      category: "Foods",
      image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      growed: 25,
      sold: 1250,
    },
    {
      id: 5,
      name: "Toast Bread",
      category: "Foods",
      image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      growed: 25,
      sold: 1250,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header Content */}
      <div className="flex items-baseline justify-between">
        <h3 className="font-bold">Report - Top Products</h3>
        <p className="text-xs">
          <span className="text-blue-400">Home</span> /{" "}
          <span className="text-blue-400">Report</span> / Top Products
        </p>
      </div>

      {/* Resume Data Content */}
      <div className="w-full grid grid-cols-2 gap-4">
        {resumeDatas.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 rounded-md flex justify-between items-center bg-white shadow-md"
          >
            <div>
              <h1
                className={`text-2xl font-semibold ${
                  item.id === 1 || item.id === 2
                    ? "text-green-500"
                    : "text-blue-400"
                }`}
              >
                {item.total}
              </h1>
              <p className="text-xs font-medium text-gray-300">{item.title}</p>
            </div>
            <div
              className={`text-white w-7 h-7 flex items-center justify-center p-1 rounded-full ${
                item.id === 1 || item.id === 2 ? "bg-green-500" : "bg-blue-400"
              }`}
            >
              {item.id === 1 || item.id === 2 ? (
                <GiMoneyStack />
              ) : item.id === 3 || item.id === 4 ? (
                <HiOutlineClipboardDocumentList />
              ) : (
                <HiShoppingCart />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Report Content */}
      <div className="p-4 flex flex-col gap-4 bg-white rounded-xl shadow-md">
        <h3 className="font-bold">Custom Report</h3>
        <div className="flex items-center justify-between">
          <div className="w-48 py-2 px-3 flex items-center justify-between bg-white border border-blue-400 text-blue-400 rounded-md">
            <span>Today</span>
            <IoIosArrowDown className={`transition ease-in `} />
          </div>
          <div className="w-fit py-2 px-3 flex items-center justify-between gap-4 bg-white border border-blue-400 text-blue-400 rounded-md">
            <span>Nov 22, 2022 - Nov 22, 2022</span>
            <IoIosArrowDown className={`transition ease-in `} />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="w-fit px-3 py-2 flex items-center gap-2 text-sm text-blue-400 rounded-md shadow-md">
            <HiOutlineDownload />
            Export Data
          </button>
        </div>
      </div>

      {/* List Of Top Product Sales Content */}
      <div className="p-4 flex flex-col gap-4 bg-white rounded-xl shadow-md">
        <h3 className="font-bold">List of Top Product Sales</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setTopSales(true);
              setTopRating(false);
            }}
            className={`px-5 py-2 rounded-full font-semibold text-gray-500 ${
              topSales && "text-white bg-blue-400"
            }`}
          >
            Top Sales
          </button>
          <button
            onClick={() => {
              setTopSales(false);
              setTopRating(true);
            }}
            className={`px-5 py-2 rounded-full font-semibold text-gray-500 ${
              topRating && "text-white bg-blue-400"
            }`}
          >
            Top Ratings
          </button>
        </div>

        {/* Search Feature */}
        <div className="w-full flex justify-end">
          <form className="w-64 px-3 py-2 text-sm border rounded-md flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-full font-medium focus:outline-none"
            />
            <button className="text-gray-500">
              <HiOutlineSearch />
            </button>
          </form>
        </div>

        {/* Filter Feature */}
        <div className="flex items-center justify-between text-sm font-medium text-gray-500">
          <p>Showing 5 entries</p>
          <span className="flex gap-3 items-center">
            Filter:{" "}
            <button className="flex items-center gap-2 text-blue-400">
              Ascending <IoIosArrowDown className={`transition ease-in `} />
            </button>
          </span>
        </div>

        {/* Card Feature */}
        <div>
          {productDatas.map((item) => (
            <CardListProduct
              key={item.id}
              number={item.id}
              name={item.name}
              category={item.category}
              growed={item.growed}
              image={item.image}
              sold={item.sold}
            />
          ))}
        </div>

        {/* Pagination Feature */}
        <div className="w-full flex justify-end items-center gap-2">
          {pages.map((numb) => (
            <button
              className="w-10 h-10 p-2 border  rounded-md font-medium text-sm text-gray-500
            hover:border-blue-400 hover:text-blue-400 focus:text-white focus:bg-blue-400 focus:border-blue-400 transition ease-in"
            >
              {numb}
            </button>
          ))}
          <button className="w-10 h-10 p-2 flex items-center justify-center border border-blue-400 rounded-md font-medium text-sm text-blue-400 active:text-white active:bg-blue-400 active:border-blue-400">
            <IoIosArrowDown className="-rotate-90" />
          </button>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default TopFavorite;
