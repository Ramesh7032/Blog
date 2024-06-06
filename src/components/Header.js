import React from "react";
import "./Header.css";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";
import Blog from "./Images/text.gif";

export default function Header() {
  return (
    <div className="container w-full flex ">
      <div className="header1 flex-auto flex items-center">
        <div className="header2 flex-1 w-30 mr-1 ">
          <img src={Blog} alt="blog" className="pl-5 " />
        </div>
        <ul className="nav-link flex flex-auto w-40 ">
          <Link to="/home" className="link-head">
            <li class=" text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl cursor-pointer font-bold mr-3  hover:text-lg hover:transition-1500 hover:duration-200 lg:hover:text-3xl xl:hover:text-2xl">
              Home
            </li>
          </Link>
          <Link to="/about" className="link-head">
            <li class=" text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl cursor-pointer font-bold mr-5  hover:text-lg hover:transition-1500 hover:duration-200 lg:hover:text-3xl xl:hover:text-2xl">
              About
            </li>
          </Link>
          {/* <Link to=""> */}
          <li class=" text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl cursor-pointer font-semibold mr-5  hover:text-lg hover:transition-1500 hover:duration-200 lg:hover:text-3xl xl:hover:text-2xl">
            Travel
          </li>
          {/* </Link> */}
        </ul>
        <ul className="nav-link2 flex  w-30">
          <li className="m-2 font-bold text-2xl cursor-pointer hover:text-3xl hover:transition-1500 hover:duration-200">
            <CiFacebook />{" "}
          </li>

          <li className="m-2 font-bold text-2xl cursor-pointer hover:text-3xl hover:transition-1500 hover:duration-200">
            <CiInstagram />{" "}
          </li>
          <li className="m-2 font-bold text-2xl cursor-pointer hover:text-3xl hover:transition-1500 hover:duration-200">
            <CiTwitter />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
