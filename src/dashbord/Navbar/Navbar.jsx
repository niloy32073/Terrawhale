import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../store/actions/userLogout";
import logo from "/TerraWhales.png";
import { AlignLeft, X } from "lucide-react";
const Navbar = ({ isOpen, setIsOpen, children }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  // Logout handler dispatches the logout action
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="md:hidden">
          {isOpen ? (
            <X onClick={() => setIsOpen(false)} />
          ) : (
            <AlignLeft onClick={() => setIsOpen(true)} />
          )}
        </div>

        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="md:hidden"></div>

          <Link to={"/"}>
            <div className="lg:flex justify-start items-center gap-2 hidden ">
              <img
                src={logo}
                className="md:h-[50px] bg-white md:w-[50px] w-[40px] h-[40px] rounded-full"
              ></img>
              <div className="">
                <p
                  className="flex-none md:text-lg text-sm font-semibold dark:text-white"
                  aria-label="Terra Whale"
                >
                  Terra Whale
                </p>
                <p
                  className="flex-none md:text-lg text-sm md:-mt-3 -mt-2 font-semibold dark:text-white"
                  aria-label="Terra Whale"
                >
                  {" "}
                  Investment Group
                </p>
              </div>
            </div>
          </Link>

          <div className="flex flex-row items-center justify-end gap-2">
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
                <Link to="/">Home</Link>
                <a
                  className="cursor-pointer"
                  onClick={logoutHandler}
                  key="logout"
                >
                  logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
