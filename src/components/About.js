import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ramesh from "./Images/ramesh2.jpg";
import Image from "react-bootstrap/Image";
import "./About.css";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Header>
        <h1 className="font-mono">About Us</h1>
      </Card.Header>
      <Card.Body className="bg-gray-200">
        <Row className="justify-content-center">
          <Col>
            <Card className=" d-flex flex-col align-items-center justigy-content-center ">
              <Col
                xs={4}
                md={3}
                className="d-flex justify-content-center mt-2 "
              >
                <Image src={ramesh} roundedCircle />
              </Col>

              <Card.Body className="text-center">
                <Card.Text>
                  <h3>Hlo, I'm Ramesh.</h3>
                </Card.Text>
                <Card.Text>
                  <h6>Front-end web developer</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card.Text
          className="font-mono md:mr-40 md:ml-44 lg:mb:8 sm:ml:0 text-center lg:text-lg mt-6"
          style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif' }}
        >
          Welcome to Travel Blog, your ultimate guide to exploring the
          enchanting tourist destinations of India!
        </Card.Text>

        <Card.Text
          className="  md:mr-40 md:ml-44 lg:mb:8 sm:ml:0 text-left lg:text-lg "
          style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif' }}
        >
          At Blog, we are passionate about showcasing the diverse cultural
          heritage, breathtaking landscapes, and rich history that India has to
          offer. Our team of dedicated professionals is committed to curating
          comprehensive information about various tourist spots across the
          country, ensuring that your journey through India is nothing short of
          extraordinary.
        </Card.Text>
        <h4>Our Mission</h4>
        <Card.Text
          className=" font-mono md:mr-40 md:ml-44 lg:mb:8 sm:ml:0 text-left lg:text-lg"
          style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif' }}
        >
          Our mission is to inspire and empower travelers like you to embark on
          transformative journeys that transcend mere sightseeing. We believe
          that travel is not just about visiting new places; it's about
          immersing yourself in different cultures, forging meaningful
          connections, and gaining a deeper understanding of the world around
          us. Through our platform, we aim to foster a sense of curiosity,
          wonder, and appreciation for the diverse tapestry of India's heritage
          and natural beauty. We strive to go beyond the surface-level tourist
          attractions and instead shine a spotlight on the hidden gems,
          lesser-known destinations, and authentic experiences that make India
          truly unique.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted ">
        <div className="follow d-flex justify-content-center text-1xl">
          {" "}
          Follow me on:
          <a href="https://www.facebook.com/ramesh.boda.39904" target="_blank">
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
    </Card>
  );
}

export default HeaderAndFooterExample;
