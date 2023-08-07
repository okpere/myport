// components/ScrollEffect.js
import React, { useEffect, useState } from "react";
import './ScrollEffect.css'
const ScrollEffect = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={`scroll-effect ${isVisible ? "visible" : ""}`}>{children} {console.log.apply('yes')}</div>;
};

export default ScrollEffect;
