import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about">
      <div className="about-intro">
        <h3>About</h3>
        <p>Let me introduce myself.</p>
        <span>
          Hey there! I'm, a recent graduate from the University
          of Benin with a BSc in Economics and Statistics. My knack for numbers
          naturally led me to the captivating world of frontend development.
          From my very first "Hello, World!" I was hooked.
        </span>
      </div>
      <div className="about-explain">
        <div className="about-explain_profile">
          <p>Profile</p>
          <span>
            I'm, a dedicated and enthusiastic frontend developer
            with a unique blend of skills in economics and statistics. A recent
            graduate from the University of Benin, I hold a BSc degree in
            Economics and Statistics, which has equipped me with a strong
            foundation in data analysis and a keen analytical mindset.
          </span>
          <div className="about-explain_profile_bio">
            <p>FULLNAME:</p>
            <span>Okpere Clinton Ose</span>
            <p>BIRTH DATE:</p>
            <span>September 09, 1994</span>
            <p>JOB:</p>
            <span>Freelancer, Frontend Developer</span>
            <p>WEBSITE:</p>
            <span>Okpere Clinton Ose</span>
            <p>EMAIL:</p>
            <span>clintonokpere99@gmail.com</span>
          </div>
        </div>
        <div className="about-explain_skills">
          <p>Skills</p>
          <span>
            My goal? To keep refining my skills, staying updated with the latest
            tech, and collaborating with fellow enthusiasts. Whether here are
            Some my qualificatication, just talk tech, let's connect!
          </span>
          <ul className="about-explain_skills_bio">
            <li>HTML5</li>
            <div className="about-skills  about-skills-html">
              <div></div>
            </div>
            <li>Css</li>
            <div className="about-skills about-skills-css">
              <div></div>
            </div>
            <li>Javascripts</li>
            <div className="about-skills about-skills-javascripts">
              <div></div>
            </div>
            <li>React</li>
            <div className="about-skills about-skills-html-react">
              <div></div>
            </div>
            <li>Figma</li>
            <div className="about-skills about-skills-figma ">
              <div></div>
            </div>
            <li>Vuejs</li>
            <div className="about-skills about-skills-vuejs ">
              <div></div>
            </div>
          </ul>
        </div>
      </div>
      <div className="about-explain_button">
        <button>HIRE ME </button>
        <button>DOWNLOAD CV</button>
      </div>
    </section>
  );
};

export default About;
