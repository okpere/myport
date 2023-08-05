import React, { useState } from "react";
import "./Header.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
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
            <MdClose color="rgb(224, 2, 105)"/>
          ) : (
            <FiMenu color="rgb(224, 2, 105)" />
          )}
          <p>KLEENT</p>
        </div>
        <ul className={headerOpen ? "header-open " : "header-close "}>
          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
          <li>Cv</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
