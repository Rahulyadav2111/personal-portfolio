import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import homeImage from "./home-picture.png";
import "./Home.css";
import Typing from "./Typing";
import { Link } from "react-router-dom";

const Home = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="home" id="home">
      <div className="container" id="particles-js">
        <div className="d-grid override-particles">
          <div className="home-text">
            <h1 data-aos="fade-up" data-aos-duration="1000">  
            こんにちは
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
              <br />
              I'm
              <span className="auto-typing"> Rahul Yadav</span>
            </h1>

            <h1 data-aos="fade-up" data-aos-duration="1000">
              <span className="auto-typing auto">
                A <Typing />
              </span>
            </h1>
            <div
              className="btn-wrap"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <span>About me</span>
              <Link className="btn" to="/about">
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="home-img">
            <img
              src={homeImage}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="150"
              alt="home"
            />
          </div>
        </div>
      </div>
      <a href="#about" className="go-down">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </section>
  );
};

export default Home;
