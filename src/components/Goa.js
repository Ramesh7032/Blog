import React, { useRef, useState } from "react";
import goa from "./Images/goa 11.jpg";
import "./Goa.css";
import palolem from "./Images/palolem-sea-beach.jpg";
import palolem2 from "./Images/Palolem-Beach.jpg";
import palolem3 from "./Images/palolem 3.png";
import fort from "./Images/12190533Chapora_Fort_Main.jpg";
import reis from "./Images/Reis Magos Fort.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import pimg from "./Images/palolem 3.png";
import Bg from "./Images/bg4.png";
import bg3 from "./Images/bg-goa.png";
import DSW from "./Images/dudhsagar-waterfall-goa.webp";
import M from "./Images/Bhagwan Mahavir Wildlife Sanctuary.jpg";
import church from "./Images/church.jpg";
import Rfort from "./Images/Reis_Magos_Fort_-_View_from_Mandovi_River (1).jpeg";
import bb from "./Images/price-for-baga-beach-in-goa.jpg";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

// import "swiper/css/pagination";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Goa() {
  const data = [
    {
      name: "goa",
      img: bg3,
    },
    {
      name: "chennai",
      img: Bg,
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
        Places to visit in Goa
      </p>
      <Container>
        <div className="cards-main row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={pimg} />
              <Card.Body>
                <Card.Title>Palolem Beach</Card.Title>
                <Card.Text>Canacona in southern Goa</Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Palolem_Beach"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={bb} />
              <Card.Body>
                <Card.Title>Baaga Beach</Card.Title>
                <Card.Text>Bardez, Goa, India</Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Baga,_Goa"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={DSW} />
              <Card.Body>
                <Card.Title>dudhsagar-waterfall</Card.Title>
                <Card.Text>Sonaulim, Goa 403410</Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Dudhsagar_Falls"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={church} />
              <Card.Body>
                <Card.Title>Immaculate Conception Church</Card.Title>
                <Card.Text>Panaji, Goa 403001</Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Immaculate_Conception"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={Rfort} />
              <Card.Body>
                <Card.Title>Reis Magos Fort</Card.Title>
                <Card.Text>Reis Magos, Goa 403114</Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Reis_Magos"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={M} />
              <Card.Body>
                <Card.Title>B M-Wildlife-Sanctuary</Card.Title>
                <Card.Text>Dharbandora taluk, Goa</Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Bhimgad_Wildlife_Sanctuary#:~:text=Bhimgad%20Wildlife%20Sanctuary%20is%20a,Village%2C%20Karnataka%20state%2C%20India."
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
