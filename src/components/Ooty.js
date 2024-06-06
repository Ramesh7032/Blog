import React, { useRef, useState } from "react";

import "./Goa.css";

import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import solang from "./Images/solang.avif";
import manalibg from "./Images/manaliback.webp";
import shimla from "./Images/shimla.avif";
import parvati from "./Images/parvativalley.avif";
import manalibg2 from "./Images/manali back2 [photoutils.com].webp";
import kasol from "./Images/kasol.avif";
import bharigu from "./Images/bharigulake.avif";
import jibhi from "./Images/jibhi.avif";
import "swiper/css";
import Ootybg from "./Images/ooty 1 [photoutils.com].jpg";
import Ootybg2 from "./Images/ooty 2 [photoutils.com].jpeg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import nilagiri from "./Images/nilagiri.avif";
import alavanche from "./Images/alavanchelake.avif";
import KalhattyWaterfalls from "./Images/Kalhatty Waterfalls.avif";
import ThreadGarden from "./Images/Thread Garden.avif";
import LawsFalls from "./Images/Laws Falls.avif";
import OotyBoatHouse from "./Images/Ooty Boat House.avif";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Goa() {
  const data = [
    {
      name: "OOty",
      img: Ootybg,
    },
    {
      name: "chennai",
      img: Ootybg2,
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
        Places to visit in Ooty
      </p>
      <Container>
        <div className="cards-main row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={nilagiri} />
              <Card.Body>
                <Card.Title>Nilgiri Mountain Railway</Card.Title>
                <Card.Text>
                  Udagamandalam (Ooty), Nilgiris district, Tamil Nadu, India
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Nilgiri_Mountain_Railway"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={alavanche} />
              <Card.Body>
                <Card.Title>Avalanche Lake</Card.Title>
                <Card.Text>
                  Avalanche Lake, near Ooty, Nilgiris district, Tamil Nadu,
                  India
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Avalanche_Lake,_Nilgiris"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={KalhattyWaterfalls} />
              <Card.Body>
                <Card.Title>Kalhatty Waterfalls</Card.Title>
                <Card.Text>
                  Kalhatti Falls, Ooty, Nilgiris district, Tamil Nadu, India
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Kalhatti_Falls_(Ooty)"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={ThreadGarden} />
              <Card.Body>
                <Card.Title>Thread Garden</Card.Title>
                <Card.Text>
                  Thread Garden (Opposite Boat House), Ooty,TamilNadu,India
                </Card.Text>
                <Link
                  to="https://ootytourpackage.co.in/thread-garden-ooty"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={LawsFalls} />
              <Card.Body>
                <Card.Title>Laws Falls</Card.Title>
                <Card.Text>
                  Laws Falls, Mettupalayam Ghat Road, Nilgiris district, Tamil
                  Nadu, India
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Law%27s_Falls,_Coonoor"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={OotyBoatHouse} />
              <Card.Body>
                <Card.Title>Ooty Boat House</Card.Title>
                <Card.Text>
                  Ooty Boat House, Ooty Lake, Nilgiris district, Tamil Nadu,
                  India
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Ooty_Lake"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>{" "}
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
