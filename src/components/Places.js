import React from "react";
import goa from "./Images/goa2.jpg";
import "./Places.css";
import pandicherri from "./Images/pandicherri 3.avif";
import manali from "./Images/manali.jpg";
import ooty from "./Images/OOTY.jpg";
import { Link } from "react-router-dom";
import ooty11 from "./Images/ooty 12.webp";
import andaman from "./Images/Andaman-Nicobar.webp";
import Button from "react-bootstrap/Button";

export default function Places() {
  return (
    <div className="places1">
      <div className="places2">
        <div className="places2-1">
          <div className="p-box1">
            <img src={goa} className="p-img" alt="" />
            <p>GOA</p>{" "}
          </div>
          <Link to="/goa">
            <Button variant="primary">Know More</Button>{" "}
          </Link>
        </div>
        <div className="places2-1">
          <div className="p-box1">
            <img src={pandicherri} className="p-img" alt="" />
            <p>PANDICHERRI</p>
          </div>
          <Link to="/pandichheri">
            <Button variant="primary">Know More</Button>{" "}
          </Link>
        </div>

        <div className="places2-1">
          <div className="p-box1">
            <img src={manali} className="p-img" alt="" />
            <p>MANALI</p>
          </div>
          <Link to="/manali">
            <Button variant="primary">Know More</Button>{" "}
          </Link>
        </div>

        <div className="places2-1">
          <div className="p-box1">
            <img src={ooty11} className="p-img" alt="" />
            <p>OOTY</p>
          </div>
          <Link to="/ooty">
            <Button variant="primary">Know More</Button>{" "}
          </Link>
        </div>

        <div className="places2-1">
          <div className="p-box1">
            <img src={andaman} className="p-img" alt="" />
            <p>Andaman & Nicobar Islands</p>
          </div>
          <Link to="/andaman">
            <Button variant="primary">Know More</Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
