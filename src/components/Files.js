/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./styles2.css";
import myImage from "./Images/OOTY.jpg";

export default function Files() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">
          My Files hello welcome to hyderabd. i am ramesh, student at vardhaman
          college of engineering
        </h1>
        <div class="flex  flex-row justify-center items-center min-h-screen">
          <img
            src={myImage}
            alt="My Image Description"
            className="sm:w-1/2  md:w-1/2 lg:w-1/2 rounded-lg shadow-md flex-1 w-90"
          />
          <img
            src={myImage}
            alt="My Image Description"
            className="sm:w-1/2  md:w-1/2 lg:w-1/2 rounded-lg shadow-md"
          />
        </div>
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></ul> */}
      </div>
    </div>
  );
}
