import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbMenu2, TbLogout } from "react-icons/tb";
import { SlUser } from "react-icons/sl";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="sticky top-0 px-20 py-5 bg-white shadow-md w-full flex justify-between items-center">
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

      {/* Mobile */}
      <button
        onClick={() => {
          setDropDown(!dropDown);
        }}
        className="block md:hidden text-xl text-blue-500"
      >
        <TbMenu2 />
      </button>

      {dropDown && (
        <div className="absolute top-12 right-20 bg-white w-48 py-2 border shadow-md rounded-md">
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
  );
}

export default Navbar;
