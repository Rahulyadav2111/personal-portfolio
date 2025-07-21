import React from "react";
import aboutImg from "../../assets/Rahul.png";
import "./About.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="container">
      <section className="about section">
        <motion.div
          className="section-title"
        >
          <h2 className="section__title">About Me</h2>
          <p className="section__subtitle">Who I am</p>
        </motion.div>
        <div className="about-container grid section-padd">
          <motion.div
            className="about__img"
          >
            <img src={aboutImg} alt="its me!" />
          </motion.div>
          <motion.div
            className="about__text"
          >
            <motion.article
              className="about__text-content"
            >
              <p>
                ― Software Developer, Fullstack Developer, experienced in both Front-end and
                Back-end development, My name is Rahul Yadav
              </p>
            </motion.article>
            <motion.article
              className="about__text-content"
            >
              <p>
              Hey! I’m Rahul Yadav, a software engineer fascinated by MERN stack and full-stack development. I’m all about creating seamless user experiences and bringing ideas to life through code. Whether it’s crafting responsive front-end interfaces or optimizing server-side performance, I’m in my element. Beyond that, I’m passionate about diving deep into data structures and algorithms, sharpening my problem-solving skills with C++. Let’s collaborate and build something incredible together!
              </p>
            </motion.article>
            <Link className="btn" to="https://drive.google.com/file/d/1n0b_EBDKI6d5sYmHfxvJnwlY1Rt7X094/view?usp=sharing" target="_blank">Show Resume</Link>
          </motion.div>
        </div>
        <div className="interests" >
            <p className="heading">Interests :-</p>
          
          <div className="intrst">
          <div className="intr">
            <p>Software development</p>
          </div>
          <div className="intr">
            <p>Web development</p>
          </div>
          <div className="intr">
            <p>M.E.R.N</p>
          </div>
          <div className="intr">
            <p>Problem Solving</p>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
