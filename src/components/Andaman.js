import React, { useRef, useState } from "react";

import "./Goa.css";

import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import "swiper/css";
import andaman1 from "./Images/andaman 2 [photoutils.com].jpg";
import andaman3 from "./Images/andaman 3 [photoutils.com].jpg";
import port from "./Images/Port-Blair.jpg.avif";
import NorthBayIsland from "./Images/North Bay Island.avif";
import JollyBuoyIsland from "./Images/Jolly Buoy Island.avif";
import NeilIsland from "./Images/Neil Island.avif";
import RadhanagarBeach from "./Images/Radhanagar Beach.avif";
import BarrenIsland from "./Images/Barren Island.avif";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Goa() {
  const data = [
    {
      name: "goa",
      img: andaman1,
    },
    {
      name: "chennai",
      img: andaman3,
    },
  ];

  return (
    <div>
      <div className="goa2">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((d) => (
            <SwiperSlide key={d.img}>
              <Image src={d.img} fluid />
              <div className="text-overlay"></div>
              {/* <p>{d.name}</p> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-lg font-semibold lg:text-2xl md:text-xl sm:text-lg font-Garamond,serif">
        {" "}
        Places to visit in Andaman and Nicobar Islands
      </p>
      <Container>
        <div className="cards-main row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={port} />
              <Card.Body>
                <Card.Title>Port Blair</Card.Title>
                <Card.Text>
                  Port Blair, Andaman and Nicobar Islands, India, 744101
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Port_Blair"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={NorthBayIsland} />
              <Card.Body>
                <Card.Title>North Bay Island</Card.Title>
                <Card.Text>
                  North Bay Island,Andaman and Nicobar Islands, India
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/North_Andaman_Island"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={JollyBuoyIsland} />
              <Card.Body>
                <Card.Title>Jolly Buoy Island</Card.Title>
                <Card.Text>
                  Jolly Buoy Island,Andaman and Nicobar Islands, India
                </Card.Text>
                <Link
                  to="https://southandaman.nic.in/tourist-place/jolly-bouy/"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={NeilIsland} />
              <Card.Body>
                <Card.Title>Neil Island</Card.Title>
                <Card.Text>
                  Neil Island , Andaman and Nicobar Islands, India
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Neil_Island"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>{" "}
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={RadhanagarBeach} />
              <Card.Body>
                <Card.Title>Radhanagar Beach</Card.Title>
                <Card.Text>
                  Havelock Island, Andaman and Nicobar Islands, India
                </Card.Text>
                <Link
                  to="https://hrtreasuries.gov.in/places-centres/radhanagar-beach-andaman/"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>{" "}
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={BarrenIsland} />
              <Card.Body>
                <Card.Title>Barren Island</Card.Title>
                <Card.Text>Barren Island Volcano, Andaman Sea, India</Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Barren_Island_(Andaman_Islands)"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <Card.Footer className="text-muted   ">
            <div className="follow d-flex justify-content-center text-1xl mt-2 mb-5">
              {" "}
              Follow me on:
              <a
                href="https://www.facebook.com/ramesh.boda.39904"
                target="_blank"
              >
                <CiFacebook className="icons text-2xl cursor-pointer mr-2 ml-1 text-black" />
              </a>
              <a href="https://www.instagram.com/_ramesh_.02/" target="_blank">
                <CiInstagram className="icons text-2xl cursor-pointer mr-2 text-black" />
              </a>
              <a
                href="https://twitter.com/BRamesh27047"
                target="_blank"
                className="text-black"
              >
                {" "}
                <CiTwitter className="icons text-2xl cursor-pointer mr-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/b-ramesh-9512ab226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-black"
              >
                {" "}
                <CiLinkedin className="icons text-2xl cursor-pointer  " />
              </a>
            </div>
          </Card.Footer>
        </div>
      </Container>
    </div>
  );
}
