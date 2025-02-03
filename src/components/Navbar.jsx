import { Link } from "react-router";
import logo from "../assets/Logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  //stats
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDevelopment = () => {
    toast(
      "This Feature is under Development.\n\nInshaallah It will be available from Tomorrow.",
      {
        duration: 3000,
      }
    );
  };

  const firstNavLinks = (
    <>
      <li>
        <details>
          <summary className="text-lg">Solutions</summary>
          <ul className="p-2 text-black">
            <li className="border-b border-gray-300 hover:text-blue-500">
              <Link to="/anycaas">AnyCaaS</Link>
            </li>
            <li className="hover:text-blue-500 border-b border-gray-300">
              <Link to="/anybaas">AnyBaaS</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/anypaas">AnyPaaS</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/services">
          <h1 className="text-lg">Services</h1>
        </Link>
      </li>
      <li>
        <Link to="/aboutus">
          <h1 className="text-lg">About Us</h1>
        </Link>
      </li>
      <li>
        <details>
          <summary className="text-lg border-white text-white border rounded-full">
            <TbWorld />
            En
          </summary>
          <ul className="p-2 text-black">
            <li className="border-b border-gray-300 hover:text-blue-500">
              <p onClick={handleDevelopment}>English</p>
            </li>
            <li className="hover:text-blue-500 border-b border-gray-300">
              <p onClick={handleDevelopment}>Chinese</p>
            </li>
            <li className="hover:text-blue-500">
              <p onClick={handleDevelopment}>Russia</p>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  const MobileFirstNavLinks = (
    <>
      <li>
        <details>
          <summary className="text-lg">Solutions</summary>
          <ul className="p-2 text-black">
            <li className="border-b border-gray-300 hover:text-blue-500">
              <Link to="/anycaas">AnyCaaS</Link>
            </li>
            <li className="hover:text-blue-500 border-b border-gray-300">
              <Link to="/anybaas">AnyBaaS</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/anypaas">AnyPaaS</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/services">
          <h1 className="text-lg">Services</h1>
        </Link>
      </li>
      <li>
        <Link to="/aboutus">
          <h1 className="text-lg">About Us</h1>
        </Link>
      </li>
      <li>
        <details>
          <summary className="text-lg border-black text-black border rounded-full">
            <TbWorld />
            En
          </summary>
          <ul className="p-2 text-black">
            <li className="border-b border-gray-300 hover:text-blue-500">
              <p onClick={handleDevelopment}>English</p>
            </li>
            <li className="hover:text-blue-500 border-b border-gray-300">
              <p onClick={handleDevelopment}>Chinese</p>
            </li>
            <li className="hover:text-blue-500">
              <p onClick={handleDevelopment}>Russia</p>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  const SecondNavLinks = (
    <>
      <li>
        <details>
          <summary className="text-lg text-blue-500">Solutions</summary>
          <ul className="p-2 text-black rounded-t-none">
            <li className="border-b border-gray-300 hover:text-blue-500">
              <Link to="/anycaas">AnyCaaS</Link>
            </li>
            <li className="hover:text-blue-500 border-b border-gray-300">
              <Link to="/anybaas">AnyBaaS</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/anypaas">AnyPaaS</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/services">
          <h1 className="text-lg text-blue-500">Services</h1>
        </Link>
      </li>
      <li>
        <Link to="/aboutus">
          <h1 className="text-lg text-blue-500">About Us</h1>
        </Link>
      </li>
      <li>
        <details>
          <summary className="text-lg border-blue-500 text-blue-500 border rounded-full">
            <TbWorld />
            En
          </summary>
          <ul className="p-2 text-black rounded-t-none">
            <li className="border-b border-gray-300 hover:text-blue-500">
              <p onClick={handleDevelopment}>English</p>
            </li>
            <li className="hover:text-blue-500 border-b border-gray-300">
              <p onClick={handleDevelopment}>Chinese</p>
            </li>
            <li className="hover:text-blue-500">
              <p onClick={handleDevelopment}>Russia</p>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  const MobileSecondNavLinks = (
    <>
      <li>
        <details>
          <summary className="text-lg text-blue-500">Solutions</summary>
          <ul className="p-2 text-blue-500 rounded-t-none">
            <li className="border-b border-gray-300 hover:text-blue-500">
              <Link to="/anycaas">AnyCaaS</Link>
            </li>
            <li className=" border-b border-gray-300">
              <Link to="/anybaas">AnyBaaS</Link>
            </li>
            <li className="">
              <Link to="/anypaas">AnyPaaS</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/services">
          <h1 className="text-lg text-blue-500">Services</h1>
        </Link>
      </li>
      <li>
        <Link to="/aboutus">
          <h1 className="text-lg text-blue-500">About Us</h1>
        </Link>
      </li>
      <li>
        <details>
          <summary className="text-lg border-blue-500 text-blue-500 border rounded-full">
            <TbWorld />
            En
          </summary>
          <ul className="p-2 text-blue-500 rounded-t-none">
            <li className="border-b border-gray-300">
              <p onClick={handleDevelopment}>English</p>
            </li>
            <li className=" border-b border-gray-300">
              <p onClick={handleDevelopment}>Chinese</p>
            </li>
            <li>
              <p onClick={handleDevelopment}>Russia</p>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <>
      {/* First Nav Part */}
      {!isScrollingUp && (
        <div className="w-full bg-blue-600 absolute z-50 lg:bg-transparent lg:bg-gradient-to-b from-blue-700">
          <div className="navbar w-full mx-auto text-black xl:w-4/5 lg:text-white">
            <div className="w-full justify-between lg:navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow border-2 border-gray-400 bg-white"
                >
                  {MobileFirstNavLinks}
                </ul>
              </div>
              <Link to="/" className="btn btn-ghost text-xl">
                <img src={logo} alt="nav logo" />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{firstNavLinks}</ul>
            </div>
            <div className="navbar-end hidden lg:flex">
              <Link to="/contactus">
                <button className="flex gap-2 items-center bg-transparent py-2 px-4 border-white border-2 hover:bg-white hover:text-blue-500 rounded-lg font-bold">
                  <span className="text-xs lg:text-xl">Contact Us</span>{" "}
                  <MdKeyboardArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Second Nav Part */}
      {isScrollingUp && (
        <div className="w-full bg-white absolute z-50">
          <div className="navbar w-full mx-auto text-black xl:w-4/5 lg:text-white">
            <div className="w-full justify-between lg:navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow border-2 border-gray-400 bg-white"
                >
                  {MobileSecondNavLinks}
                </ul>
              </div>
              <Link to="/" className="btn btn-ghost text-xl">
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/70e2228631883a893695c64b637b99dc8661871c-171x28.svg?w=171&auto=format"
                  alt="nav logo"
                />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{SecondNavLinks}</ul>
            </div>
            <div className="navbar-end hidden lg:flex">
              <Link to="/contactus">
                <button className="flex gap-2 items-center py-2 px-4 bg-[#ff8a53] hover:bg-white hover:text-blue-500 rounded-lg font-bold">
                  <span className="text-xs lg:text-xl">Contact Us</span>{" "}
                  <MdKeyboardArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
