import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { SlUser } from "react-icons/sl";
import { HiMenuAlt2, HiMenuAlt3, HiHome } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [transition, setTransition] = useState(false);

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
    <div className="sticky top-0 z-50 px-8 lg:px-20 py-5 bg-white shadow-md w-full flex justify-between items-center">
      {/* Mobile Sidebar */}
      <div className="relative block lg:hidden ">
        <button
          onClick={() => {
            setDrawer(true);
          }}
          className="text-xl text-blue-500"
        >
          <HiMenuAlt2 />
        </button>
      </div>
      {/* Drawer Menu */}
      <>
        <div
          onClick={() => setDrawer(false)}
          className={`block lg:hidden absolute top-0 left-0 w-full h-screen bg-black  z-30 transition ease-linear duration-100 bg-opacity-20 -translate-x-[1000px] ${
            drawer && "w-full translate-x-0"
          }`}
        />
        <div
          className={`lg:hidden fixed top-0 left-0 w-[300px] h-screen py-10 px-4 flex flex-col items-center gap-3 z-50 bg-white transition ease-linear duration-200 -translate-x-[300px] ${
            drawer && "w-[300px] translate-x-[1px]"
          }`}
        >
          <div className="w-full">
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
                    className={`transition ease-in ${
                      isService && "-rotate-180"
                    }`}
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
                    className={`transition ease-in ${
                      isReport && "-rotate-180"
                    }`}
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
      </>

      <div className="flex gap-2 items-center text-base font-semibold text-blue-400">
        Pet Central
        <span className="px-1 py-1 bg-blue-400 text-white rounded">ADMIN</span>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-10">
        <div className="relative cursor-pointer">
          <IoNotificationsOutline className="text-black text-2xl font-bold " />
          <span className="absolute -top-0.5 right-0 text-[10px] w-[15px] h-[15px] flex items-center justify-center rounded-full  bg-red-600 text-white font-medium">
            9
          </span>
        </div>
        <div>
          <h3 className="font-medium">John Doe</h3>
          <p className="text-[11px] text-gray-500 uppercase">admin</p>
        </div>
        <button className="text-blue-400 font-semibold">Log Out</button>
      </div>

      {/* Mobile Dropdown */}
      <div className="relative block md:hidden ">
        <button
          onClick={() => {
            setDropDown(!dropDown);
          }}
          className="text-xl text-blue-500"
        >
          <HiMenuAlt3 />
        </button>

        {dropDown && (
          <div className="absolute top-6 right-0 bg-white w-48 py-2 border shadow-md rounded-md">
            <ul className="w-full text-sm font-medium text-gray-800">
              <li className="w-full px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
                <IoNotificationsOutline className="text-lg text-blue-400" />
                Notification
                <span className="text-[11px] bg-red-600 text-white w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  9
                </span>
              </li>
              <li className="w-full px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
                <SlUser className="text-lg text-blue-400" />
                John Doe
                <span className="text-[8px] bg-gray-300 rounded-sm px-2 py-[0.2px] text-white">
                  ADMIN
                </span>
              </li>
              <li className="w-full px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
                <TbLogout className="text-lg text-blue-400" />
                Log Out
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
