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
      img: manalibg,
    },
    {
      name: "chennai",
      img: manalibg2,
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
        Places to visit in Manali
      </p>
      <Container>
        <div className="cards-main row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={solang} />
              <Card.Body>
                <Card.Title>Solang Valley</Card.Title>
                <Card.Text>
                  Solang Valley, Kullu district, Himachal Pradesh, India
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Solang_Valley"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={shimla} />
              <Card.Body>
                <Card.Title>Shimla</Card.Title>
                <Card.Text>
                  Shimla, Shimla district, Himachal Pradesh, India
                </Card.Text>
                <Link to="https://hpshimla.nic.in/history/" target="_blank">
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={parvati} />
              <Card.Body>
                <Card.Title>Parvati Valley</Card.Title>
                <Card.Text>
                  Bhuntar, Kullu district, Himachal Pradesh,India
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Parvati_Valley"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={kasol} />
              <Card.Body>
                <Card.Title>Kasol</Card.Title>
                <Card.Text>
                  Kasol, Kullu district, Himachal Pradesh, India
                </Card.Text>
                <Link to="https://en.wikipedia.org/wiki/Kasol" target="_blank">
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={bharigu} />
              <Card.Body>
                <Card.Title>Bhrigu Lake</Card.Title>
                <Card.Text>
                  Near Manali,Kullu district,Himachal Pradesh, India
                </Card.Text>
                <Link
                  to="https://en.wikipedia.org/wiki/Bhrigu_Lake"
                  target="_blank"
                >
                  <Button variant="primary">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={jibhi} />
              <Card.Body>
                <Card.Title>Jibhi</Card.Title>
                <Card.Text>
                  Jibhi, Banjar district, Himachal Pradesh, India
                </Card.Text>
                <Link
                  to="https://www.google.co.in/travel/hotels/entity/ChkIparv0v_q6bo9Gg0vZy8xMWxrdGN3ZjZqEAQ?utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwi44drzsseGAxUAAAAAHQAAAAAQAw"
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
