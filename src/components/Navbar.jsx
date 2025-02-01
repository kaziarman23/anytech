import Logo from "../assets/Logo.png";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { useState } from "react";
import Divider from "./ui/Divider";

const NavBar = () => {
  const [openLanguageDropdown, setOpenLanguageDropdown] = useState(false);

  return (
    <div className="w-full bg-linear-to-b from-blue-500 to-transparent absolute z-20 top-0 left-0 right-0">
      <div className="flex items-center justify-between w-4/5 mx-auto py-5">
        <div className="w-1/4">
          <img className="w-[150px]" src={Logo} alt="logo" />
        </div>
        <div className="flex items-center gap-7 text-lg text-white">
          <div className="relative">
            <div id="solution-hover" className="flex items-center gap-1">
              Solution
              <MdOutlineKeyboardArrowDown className="text-lg" />
            </div>
            <div
              id="solution-hover-items"
              className="bg-white absolute mt-2 p-3 rounded-lg space-y-2 duration-300"
            >
              <a
                className="text-gray-500 inline-block px-5 hover:text-blue-500"
                href="#"
              >
                AnyCaaS
              </a>
              <Divider />
              <a
                className="text-gray-500 inline-block px-5 hover:text-blue-500"
                href="#"
              >
                AnyPaaS
              </a>
              <Divider />
              <a
                className="text-gray-500 inline-block px-5 hover:text-blue-500"
                href="#"
              >
                AnyBaaS
              </a>
            </div>
          </div>
          <div>Services</div>
          <div>About Us</div>
          <div className="relative">
            <div
              onClick={() => setOpenLanguageDropdown(!openLanguageDropdown)}
              className="border-2 px-3 py-1 h-fit rounded-full flex items-center gap-1 cursor-pointer"
            >
              <IoIosGlobe />
              <p>EN</p>
              {openLanguageDropdown ? (
                <MdOutlineKeyboardArrowUp className="text-lg" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-lg" />
              )}
            </div>
            {openLanguageDropdown && (
              <div className="bg-white absolute mt-2 p-3 rounded-lg space-y-2 duration-300 right-0 w-max">
                <a
                  className="text-gray-500 inline-block px-5 hover:text-blue-500"
                  href="#"
                >
                  English
                </a>
                <Divider />
                <a
                  className="text-gray-500 inline-block px-5 hover:text-blue-500"
                  href="#"
                >
                  Chinese
                </a>
                <Divider />
                <a
                  className="text-gray-500 inline-block px-5 hover:text-blue-500"
                  href="#"
                >
                  ID (Bahasa Indonesia)
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/4 flex justify-end">
          <button className="ml-auto flex items-center border-2 border-white px-8 py-[10px] text-white hover:bg-white hover:text-blue-400 text-lg rounded-lg gap-1 duration-300">
            Contact Us <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
