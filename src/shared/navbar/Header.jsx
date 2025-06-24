import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import logo from "/TerraWhales.png";
import useDarkSide from "../../hooks/ThemeCustom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userLogout";

const Header = () => {
  const router = useLocation();
  const [open, setOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  // Logout handler dispatches the logout action
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-[999] dark:bg-gray-800/50 bg-opacity-10  bg-gray-300/50 backdrop-filter backdrop-blur-sm">
      <div className="md:flex items-center justify-between  py-2 md:px-10 px-7">
        <Link to={"/"}>
          <div className="flex justify-start items-center gap-2">
            <img
              src={logo}
              className="md:h-[50px] bg-white md:w-[50px] w-[40px] h-[40px] rounded-full"
            ></img>
            <div className="">
              <p
                className="flex-none md:text-lg text-sm font-semibold dark:text-white"
                aria-label="Terra Whale"
              >
                Terra Whale  Investment Group
              </p>
              {/* <p
                className="flex-none md:text-lg text-sm md:-mt-3 -mt-2 font-semibold dark:text-white"
                aria-label="Terra Whale"
              >
                {" "}
              
              </p> */}
            </div>
          </div>
        </Link>
        <div className="flex justify-start items-center gap-1 md:hidden absolute right-2 top-3">
          <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={20}
          />
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl  cursor-pointer "
          >
            <RxHamburgerMenu className="text-[20px] dark:text-white"></RxHamburgerMenu>
          </div>
        </div>

        <ul
          className={`flex md:flex-row flex-col fle md:items-center md:pb-0 pb-8 md:gap-4 gap-2 absolute md:static md:z-auto  left-0 w-full md:w-auto md:pl-0 pt-2 md:-ml-0 lg:pb-0 -mt-4 pl-4 transition-all duration-500 ease-in ${
            open
              ? "top-20 absolute z-[999] dark:bg-[#10151C]  bg-[#E4E6E9] text-gray-100 "
              : "top-[-490px]"
          }`}
        >
          <Link
            onClick={() => setOpen(!open)}
            to={"/who-we-are"}
            className={`${
              router.pathname === "/who-we-are"
                ? "text-[#668bfd] dark:text-[#668bfd]"
                : "text-gray-700 dark:text-gray-400  hover:text-gray-400"
            } font-medium  md:py-3 lg:py-6 `}
          >
            Who We Are
          </Link>

          <Link
            onClick={() => setOpen(!open)}
            to={"/approach"}
            className={`${
              router.pathname === "/approach"
                ? "text-[#668bfd] dark:text-[#668bfd]"
                : "text-gray-500 dark:text-gray-400  hover:text-gray-400"
            } font-medium  md:py-3 lg:py-6 `}
          >
            Approach
          </Link>

          <Link
            onClick={() => setOpen(!open)}
            to={"/team"}
            className={`${
              router.pathname === "/team"
                ? "text-[#668bfd] dark:text-[#668bfd]"
                : "text-gray-500 dark:text-gray-400  hover:text-gray-400"
            } font-medium  md:py-3 lg:py-6 `}
          >
            Team
          </Link>

          <Link
            onClick={() => setOpen(!open)}
            to={"/investments"}
            className={`${
              router.pathname === "/investments"
                ? "text-[#668bfd] dark:text-[#668bfd]"
                : "text-gray-500 dark:text-gray-400  hover:text-gray-400"
            } font-medium  md:py-3 lg:py-6 `}
          >
            Investments
          </Link>

          <Link
            onClick={() => setOpen(!open)}
            to={"/news"}
            className={`${
              router.pathname === "/news"
                ? "text-[#668bfd] dark:text-[#668bfd]"
                : "text-gray-500 dark:text-gray-400  hover:text-gray-400"
            } font-medium  md:py-3 lg:py-6 `}
          >
            News
          </Link>

          <Link
            onClick={() => setOpen(!open)}
            to={"/get-in-touch"}
            className={`${
              router.pathname === "/get-in-touch"
                ? "text-[#668bfd] dark:text-[#668bfd]"
                : "text-gray-500 dark:text-gray-400  hover:text-gray-400"
            } font-medium  md:py-3 lg:py-6 `}
          >
            Get In Touch
          </Link>
          <div></div>
          <DarkModeSwitch
            className="md:block hidden"
            checked={darkSide}
            onChange={toggleDarkMode}
            size={24}
          />
          {userState?.userInfo ? (
            <div className="dropdown mt-2 rounded-full">
              <span className="dropbtn inline-block h-[2.375rem] w-[2.375rem] bg-gray-100 rounded-full overflow-hidden">
                <svg
                  className="h-full w-full text-gray-300"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.62854"
                    y="0.359985"
                    width="15"
                    height="15"
                    rx="7.5"
                    fill="white"
                  />
                  <path
                    d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <div className="dropdown-content">
                <Link to="/dashboard">Dashboard</Link>
                <a
                  className="cursor-pointer"
                  onClick={logoutHandler}
                  key="logout"
                >
                  logout
                </a>
              </div>
            </div>
          ) : (
            <Link
              onClick={() => setOpen(!open)}
              to={"/login"}
              className={`${
                router.pathname === "/login"
                  ? "text-[#668bfd] dark:text-[#668bfd]"
                  : "text-gray-500 dark:text-gray-400  hover:text-gray-400"
              } font-medium  md:py-3 lg:py-6`}
            >
              Investor Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
