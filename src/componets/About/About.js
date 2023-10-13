import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <section id="about" className="about" data-aos="fade-left">
      <div className="about-intro">
        <h3>About</h3>
        <p>Let me introduce myself.</p>
        <span>
          Hey there! I'm, a recent graduate from the University of Benin with a
          BSc in Economics and Statistics. My knack for numbers naturally led me
          to the captivating world of frontend development. From my very first
          "Hello, World!" I was hooked.
        </span>
      </div>
      <div className="about-explain">
        <div className="about-explain_profile">
          <h6>PROFILE</h6>
          <p>
            I'm, a dedicated and enthusiastic frontend developer with a unique
            blend of skills in economics and statistics.
          </p>
          <ul>
            <li>FULLNAME:</li>
            <span>Okpere Clinton Ose</span>
            <li>BIRTH DATE:</li>
            <span>September 09, 1994</span>
            <li>JOB:</li>
            <span>Freelancer, Frontend Developer</span>
            <li>WEBSITE:</li>
            <span>Okpere Clinton Ose</span>
            <li>EMAIL:</li>
            <span>clintonokpere99@gmail.com</span>
          </ul>
        </div>
        <div className="about-explain_skills">
          <h6>SKILLS</h6>
          <p>
            My goal? To keep refining my skills, staying updated with the latest
            tech, and collaborating with enthusiasts.
          </p>
          <ul className="about-explain_skills_bio">
            <li>HTML5</li>
            <div className="about-skills">
              <div className="about-skills-html"></div>
            </div>
            <li>Css</li>
            <div className="about-skills">
              <div className="about-skills-css"></div>
            </div>
            <li>Javascripts</li>
            <div className="about-skills">
              <div className="about-skills-javascripts"></div>
            </div>
            <li>React</li>
            <div className="about-skills">
              <div className="about-skills-react"></div>
            </div>
            <li>Figma</li>
            <div className="about-skills">
              <div className="about-skills-figma"></div>
            </div>
            <li>Vuejs</li>
            <div className="about-skills">
              <div className="about-skills-vuejs"></div>
            </div>
          </ul>
        </div>
      </div>
      <div className="about-explain_button">
        <a
          href="https://wa.me/23480953197"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className="hire">HIRE ME</button>
        </a>
        <a
          href="https://drive.google.com/file/d/1FNQYmMTISGBXhUSAQg3TEHTk5nhBCM-P/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className="download">DOWNLOAD CV</button>
        </a>
      </div>
    </section>
  );
};

export default About;
