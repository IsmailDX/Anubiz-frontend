import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const navList = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Fitness & Exercise",
  "Toys & Games",
];

const NavbarTwo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-14 bg-[#965A26] flex justify-center items-center lg:px-[3%] sm:px-3 px-[5%] overflow-hidden select-none">
      <div className="sm:w-fit w-full">
        <div
          className="border-2 relative border-white sm:min-w-[190px] w-full text-white py-1 px-3 rounded-xl flex justify-between items-center cursor-pointer
      hover:text-gray-300 hover:border-gray-300 transition-all duration-100 ease-in-out"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2  ">
            <RxHamburgerMenu className="w-5 h-5" />
            <p>All Categories</p>
          </div>
          {open ? (
            <IoIosArrowUp className="mt-1" />
          ) : (
            <IoIosArrowDown className="mt-1" />
          )}
        </div>
        {open && (
          <ul className="absolute top-32 sm:min-w-[190px] sm:w-fit w-[90%]">
            {navList.map((item, index) => (
              <li className="bg-[#965A26]/60 hover:bg-[#965A26]/70 p-2 text-white w-full border-b-[1px] border-white/20 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul className="sm:w-full w-0 sm:pl-4 flex justify-around items-center pl-0 gap-2 text-white">
        {navList.map((item, index) => (
          <li
            className="md:text-base sm:text-sm text-[0px] text-center cursor-pointer hover:underline hover:text-gray-300 
          transition-all duration-100 ease-in-out"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarTwo;
