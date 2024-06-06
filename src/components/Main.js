import React from "react";
import Travel from "./Images/travel4";
import Places from "./Places";
import Image from "react-bootstrap/Image";

export default function Main() {
  return (
    <div>
      <div className="main1">
        <div className="image-container">
          <Image
            src={Travel}
            fluid
            style={{ width: "100%", margin: "0", marginBottom: "10" }}
          />
          <div className="text-overlay">
            <p className="p1 text-sm sm:text-sm md:text-2xl lg:text-4xl xl:text-4xl">
              Travel Blog
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
              I haven’t been everywhere, but it’s on my list
            </p>
          </div>
        </div>
      </div>
      <Places />
    </div>
  );
}
