import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about">
      <div className="about-intro">
        <h3>About</h3>
        <p>Let me introduce myself.</p>
        <span>
          Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat
          laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id
          pariatur Duis laboris amet exercitation veniam labore consectetur ea
          id quis eiusmod.
        </span>
      </div>
      <div className="about-explain">
        <div className="about-explain_profile">
          <p>Profile</p>
          <span>
            Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse
            in magna sint minim officia consectetur nisi commodo ea magna
            pariatur nisi cillum.
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
            Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse
            in magna sint minim officia consectetur nisi commodo ea magna
            pariatur nisi cillum.
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
