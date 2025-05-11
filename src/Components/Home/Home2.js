import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/5fbaf4d6cb2f3dc79505270c_wave_bitmojii 1 (1).png";
import "./Home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <div className="home-about">
        <div className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </div>
          <div className="home-about-description">
  <h1 className="heading">
    INTRODUCTION
  </h1>
  <p className="home-about-body">
    I am a final-year Computer Science and Engineering student at BTKIT Dwarahat, passionate about programming, web development, and creating impactful digital solutions. 💻
    <br />
    <br />
    My strongest tools are:
    <i>
      <b className="purple"> C++, JavaScript, and the MERN Stack.</b>
    </i>
    <br />
    <br />
    I have developed a strong command of full-stack web development, specializing in building modern
    <i>
      <b className="purple"> Web Technologies and Products</b>
    </i>
    , as well as honing my skills in
    <i>
      <b className="purple"> Data Structures and Algorithms (DSA)</b>
    </i>
    for problem-solving.
    <br />
    <br />
    Currently, I am actively working on exciting projects using the
    <b className="purple"> MERN Stack </b>
    and continually exploring new technologies to expand my expertise as a 
    <b className="purple"> Full-Stack Developer.</b>
  </p>
</div>

        </div>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rahulyadav2111"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rahul-yadav21/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rhl_ydv_21/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
