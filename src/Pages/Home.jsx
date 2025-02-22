import React, { useState, useEffect, useContext } from "react";
import UserContext from "../Context/AuthContext";
import { useNavigate } from "react-router";
import ThemeContext from "../Context/ThemeProvider";

const Home = () => {
const {theme} = useContext(ThemeContext)
const navigate = useNavigate()
const {user} = useContext(UserContext)
  

  if (!user) return navigate("/login");

  return (
    <div
      className={`${theme === "dark" ? "bg-gray-100 text-gray-900" : ""} p-3 container mx-auto  dark:bg-gray-900 min-h-screen  dark:text-gray-100`}
    >

      <h1 className="text-3xl font-bold text-center my-4 ">Professional Task Manager</h1>
      


    </div>
  );
};

export default Home;
