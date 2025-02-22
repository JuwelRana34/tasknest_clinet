import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/AuthContext";
import { Button, toast } from "keep-react";
import { SwitchComponent } from "./ToogleSwtich";

function Navbar() {
  const { pathname } = useLocation();
  const { user, LogOut, setUser, setIsloading } = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    LogOut()
      .then(() => {
        setIsloading(false)
        setUser(null);
        navigate("/");
        toast.warning("Logged Out Successfully");
      })
      .catch((err) => {
        setIsloading(false)
        toast.error(`${err.message}`);
      });
  };

  useEffect(() => {
    const DynamicTitle = {
      "/": "Home |tasknest",
      "/login": "Login | tastnet",
    };
    document.title = DynamicTitle[pathname] || "tasknest";
  }, [pathname]);


  const navitems = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </NavLink>

      <SwitchComponent />
    </>
  );

  return (
    <div className=" backdrop-blur z-[999] bg-main_ui/40 sticky top-0 text-Main_text ">
       <div className="navbar container mx-auto py-4 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn p-2 btn-ghost lg:hidden"
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
            className="menu font-semibold menu-sm dropdown-content space-y-2 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navitems}
          </ul>
        </div>
        <Link to={"/"} className="flex items-center">
          <img
            src={"https://cdn-icons-png.flaticon.com/128/1527/1527478.png"}
            className=" dark:rounded-lg w-12 md:w-16"
            alt="TaskNest"
          />

          <Link
            to={"/"}
            className="btn text-blue-500 text-xl btn-ghost p-2 dark:text-metal-300 md:text-3xl font-bold font-berkshire"
          >
            TaskNest
          </Link>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex items-center space-x-4 font-semibold menu-horizontal px-1">
          {navitems}
        </ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <>
            <div className="flex items-center space-x-2">
              <img
                className=" rounded-full h-12  shadow-lg w-12"
                src={user.photoURL}
                alt=""
              />
              <Button onClick={handleLogout} className="bg-rose-500  ">
                LogOut
              </Button>
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button className="bg-blue-500">Login </Button>
            </Link>
          </>
        )}
      </div>
    </div>
    </div>
   
  );
}

export default Navbar;