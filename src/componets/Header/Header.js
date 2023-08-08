import React, { useState } from "react";
import "./Header.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
const Header = () => {
  const [headerOpen, setHeaderOpen] = useState(false);
  return (
    <section>
      <div className="header-intro">
        <div
          onClick={() => setHeaderOpen((prev) => !prev)}
          className="header-intro-name"
        >
          {headerOpen ? (
            <MdClose color="rgb(224, 2, 105)" />
          ) : (
            <FiMenu color="rgb(224, 2, 105)" />
          )}
          <p>KLEENT</p>
        </div>
        <ul className={headerOpen ? "header-open " : "header-close "}>
          <Link to="header" smooth={true} duration={1000}>
            <li>HOME</li>
          </Link>
          <Link to="examples" smooth={true} duration={1000}>
            <li>PORTFOLIO</li>
          </Link>
          <Link to="about" smooth={true} duration={1000}>
            <li>CONTACT</li>
          </Link>
          <Link to="about" smooth={true} duration={1000}>
            <li>Cv</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Header;
