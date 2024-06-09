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
            I am a Pre-final year student pursuing Computer Science and Engineering @ BTKIT Dwarahat with a passion for programming and web development.💻
            and I have at least learnt
              something, Maybe
              <br />
              <br />The best weapons :-
              <i>
                <b className="purple"> C++ and Javascript. </b>
              </i>
              <br />
              <br />
              I'm Interested in building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also Interested in{" "}
                <b className="purple">Problem solving DSA.</b>
              </i>
              <br />
              <br />
              Things I am Currently Working on :- <b className="purple"> M.E.R.N Stack</b>
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
