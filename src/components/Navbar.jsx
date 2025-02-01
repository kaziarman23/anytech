import Logo from "../assets/Logo.png";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
  const [openLanguageDropdown, setOpenLanguageDropdown] = useState(false);

  return (
    <div className="w-full bg-linear-to-b from-blue-500 to-transparent absolute z-20 top-0 left-0 right-0">
      <div className="flex items-center justify-between w-4/5 mx-auto py-5">
        <div className="w-1/4">
          <img className="w-[150px]" src={Logo} alt="logo" />
        </div>
        <div className="flex items-center gap-7 text-lg text-white">
          <div className="flex items-center gap-1">
            Solution
            <MdOutlineKeyboardArrowDown className="text-lg" />
          </div>
          <div>Services</div>
          <div>About Us</div>
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
        </div>
        <div className="w-1/4 flex justify-end">
          <button className="ml-auto flex items-center border-2 border-white px-8 py-[10px] text-white text-lg rounded-lg gap-1">
            Contact Us <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
