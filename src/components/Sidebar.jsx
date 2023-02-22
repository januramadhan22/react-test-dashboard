import React, { useState } from "react";
import { HiHome } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

function Sidebar() {
  // Main Menu
  const [isDashboard, setIsDashboard] = useState(false);
  const [isReservation, setIsReservation] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isStore, setIsStore] = useState(false);
  const [isReport, setIsReport] = useState(true);
  const [isCustomer, setIsCustomer] = useState(false);
  const [isChat, setIsChat] = useState(false);

  // Sub Menu Report
  const [topFavorite, setTopFavorite] = useState(true);

  return (
    <div className="hidden md:block fixed left-0 z-50 w-[280px] md:w-[350px] h-screen pl-4 lg:pl-20 pr-5 py-8 bg-white border-r">
      <div>
        <ul className="w-full">
          <li
            className={`w-full px-4 py-3 border-l-4 border-l-transparent flex flex-col text-gray-500 font-semibold transition ease-in ${
              isDashboard && "border-l-blue-500"
            }`}
          >
            <button
              onClick={() => {
                setIsDashboard(true);
                setIsReservation(false);
                setIsService(false);
                setIsStore(false);
                setIsReport(false);
                setIsCustomer(false);
                setIsChat(false);
              }}
              className={`w-full flex items-center gap-2 hover:text-blue-400 transition ease-in ${
                isDashboard && "text-blue-400"
              }`}
            >
              <HiHome />
              Dashboard
            </button>
          </li>

          {/* Reservation */}
          <li
            className={`w-full px-4 py-3 border-l-4 border-l-transparent flex flex-col text-gray-500 font-semibold transition ease-in ${
              isReservation && "border-l-blue-500"
            }`}
          >
            <button
              onClick={() => {
                setIsDashboard(false);
                setIsReservation(true);
                setIsService(false);
                setIsStore(false);
                setIsReport(false);
                setIsCustomer(false);
                setIsChat(false);
              }}
              className={`w-full flex items-center justify-between gap-2 hover:text-blue-400 transition ease-in ${
                isReservation && "text-blue-400"
              }`}
            >
              <span className="flex items-center gap-2">
                <HiHome />
                Reservation
              </span>
              <IoIosArrowDown
                className={`transition ease-in ${
                  isReservation && "-rotate-180"
                }`}
              />
            </button>
          </li>

          {/* Service */}
          <li
            className={`w-full px-4 py-3 border-l-4 border-l-transparent flex flex-col text-gray-500 font-semibold transition ease-in ${
              isService && "border-l-blue-500"
            }`}
          >
            <button
              onClick={() => {
                setIsDashboard(false);
                setIsReservation(false);
                setIsService(true);
                setIsStore(false);
                setIsReport(false);
                setIsCustomer(false);
                setIsChat(false);
              }}
              className={`w-full flex items-center justify-between gap-2 hover:text-blue-400 transition ease-in ${
                isService && "text-blue-400"
              }`}
            >
              <span className="flex items-center gap-2">
                <HiHome />
                Service
              </span>
              <IoIosArrowDown
                className={`transition ease-in ${isService && "-rotate-180"}`}
              />
            </button>
          </li>

          {/* Store */}
          <li
            className={`w-full px-4 py-3 border-l-4 border-l-transparent flex flex-col text-gray-500 font-semibold transition ease-in ${
              isStore && "border-l-blue-500"
            }`}
          >
            <button
              onClick={() => {
                setIsDashboard(false);
                setIsReservation(false);
                setIsService(false);
                setIsStore(true);
                setIsReport(false);
                setIsCustomer(false);
                setIsChat(false);
              }}
              className={`w-full flex items-center justify-between gap-2 hover:text-blue-400 transition ease-in ${
                isStore && "text-blue-400"
              }`}
            >
              <span className="flex items-center gap-2">
                <HiHome />
                Store
              </span>
              <IoIosArrowDown
                className={`transition ease-in ${isStore && "-rotate-180"}`}
              />
            </button>
          </li>

          {/* Report */}
          <li
            className={`w-full px-4 py-3 border-l-4 border-l-transparent flex flex-col text-gray-500 font-semibold transition ease-in ${
              isReport && "border-l-blue-500"
            }`}
          >
            <button
              onClick={() => {
                setIsDashboard(false);
                setIsReservation(false);
                setIsService(false);
                setIsStore(false);
                setIsReport(true);
                setIsCustomer(false);
                setIsChat(false);
              }}
              className={`w-full flex items-center justify-between gap-2 hover:text-blue-400 transition ease-in ${
                isReport && "text-blue-400"
              }`}
            >
              <span className="flex items-center gap-2">
                <HiHome />
                Report
              </span>
              <IoIosArrowDown
                className={`transition ease-in ${isReport && "-rotate-180"}`}
              />
            </button>
            {isReport && (
              <div className="flex flex-col gap-2 py-4 ml-6">
                <button className="w-fit hover:text-blue-400 transition ease-in">
                  Service Report
                </button>
                <button className="w-fit hover:text-blue-400 transition ease-in">
                  Store Report
                </button>
                <button
                  className={`w-fit hover:text-blue-400 transition ease-in ${
                    topFavorite && "text-blue-400"
                  }`}
                >
                  Top Favorite Product
                </button>
              </div>
            )}
          </li>

          {/* Customer */}
          <li
            className={`w-full px-4 py-3 border-l-4 border-l-transparent flex flex-col text-gray-500 font-semibold transition ease-in ${
              isCustomer && "border-l-blue-500"
            }`}
          >
            <button
              onClick={() => {
                setIsDashboard(false);
                setIsReservation(false);
                setIsService(false);
                setIsStore(false);
                setIsReport(false);
                setIsCustomer(true);
                setIsChat(false);
              }}
              className={`w-full flex items-center gap-2 hover:text-blue-400 transition ease-in ${
                isCustomer && "text-blue-400"
              }`}
            >
              <HiHome />
              Customer
            </button>
          </li>

          {/* Chat */}
          <li
            className={`w-full px-4 py-3 border-l-4 border-l-transparent flex flex-col text-gray-500 font-semibold transition ease-in ${
              isChat && "border-l-blue-500"
            }`}
          >
            <button
              onClick={() => {
                setIsDashboard(false);
                setIsReservation(false);
                setIsService(false);
                setIsStore(false);
                setIsReport(false);
                setIsCustomer(false);
                setIsChat(true);
              }}
              className={`w-full flex items-center gap-2 hover:text-blue-400 transition ease-in ${
                isChat && "text-blue-400"
              }`}
            >
              <HiHome />
              Chat
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
