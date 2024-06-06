import React, { useRef, useState } from "react";

import "./Goa.css";

import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import pand from "./Images/pan2.jpg";
import pand1 from "./Images/pan1.jpg";
import paradise from "./Images/paradise beach.avif";
import auroville from "./Images/auroville [photoutils.com].jpeg";
import promenade from "./Images/Seasidepromenadepondicherry.jpg";
import lighthouse from "./Images/old lighthouse.avif";
import museum from "./Images/museam.avif";
import rockbeach from "./Images/rock-beach.avif";

import "swiper/css";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Goa() {
  const data = [
    {
      name: "goa",
      img: pand,
    },
    {
      name: "chennai",
      img: pand1,
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
        Places to visit in Pondichheri
      </p>
      <Container>
        <div className="cards-main row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={paradise} />
              <Card.Body>
                <Card.Title>Paradise Beach</Card.Title>
                <Card.Text>Pudukuppam, Puducherry 605007</Card.Text>
                <Link
                  to="https://pondicherrytourism.co.in/paradise-beach-puducherry"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={auroville} />
              <Card.Body>
                <Card.Title>Auroville</Card.Title>
                <Card.Text>
                  Bommayapalayam, Puducherry, Tamil Nadu, 605101
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Auroville"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={promenade} />
              <Card.Body>
                <Card.Title>Promenade</Card.Title>
                <Card.Text>Goubert Ave, White Town, Puducherry</Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Promenade_(disambiguation)"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={lighthouse} />
              <Card.Body>
                <Card.Title>Old Lighthouse</Card.Title>
                <Card.Text>Dubrayapet, Puducherry, 605004</Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Pondicherry_Lighthouse"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={museum} />
              <Card.Body>
                <Card.Title>The Pondicherry Museum</Card.Title>
                <Card.Text>Reis Magos, Goa 403114</Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Pondicherry_Museum"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={rockbeach} />
              <Card.Body>
                <Card.Title>Rock Beach</Card.Title>
                <Card.Text>Laporte St, MG Road Area, Puducherry</Card.Text>
                <Link
                  to="https://www.thrillophilia.com/attractions/rock-beach"
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
