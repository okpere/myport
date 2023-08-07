import React from "react";
import ImageContainer from "../../ImageContainer/ImageContainer";
import "./Examples.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


// Import the images using their relative paths
import liberty from "../../assets/liberty.jpg";
import lighthouse from "../../assets/lighthouse.jpg";
import beetle from "../../assets/beetle.jpg";
const Examples = () => {
  useEffect(()=> {
    AOS.init({duration: 3000});
  },[])
  const imagesData = [
    {
      imagePath: liberty,
      text: "E-commerce",
      work: "freelance",
      Cheigth: "700",
    },
    {
      imagePath: lighthouse,
      text: "Landing-Page",
      work: "FourtuneHouse",
      Cheigth: "700",
    },
    {
      imagePath: beetle,
      text: "Project",
      work: "web-development",
      Cheigth: "800",
    },
  ];

  return (
    <section className="examples" data-aos="zoom-in">
      <div className="examples_info">
        <h4>PORTFOLIO</h4>
        <p>Check Out Some of My Works.</p>
        <p>
          I'm Clinton Okpere, a frontend developer and economics-statistics
          graduate. My journey harmonizes analytical prowess with a passion for
          crafting immersive digital experiences. By merging data insights with
          design, I create user-centric interfaces. Let's collaborate to shape
          innovative digital solutions for a dynamic world.
        </p>
      </div>
      <div className="examples-images">
        {imagesData.map((data, index) => (
          <ImageContainer
            key={index}
            imagePath={data.imagePath}
            imageHeigh={data.Cheigth}
            displayText={data.text}
            displayWork={data.work}
          />
        ))}
      </div>
    </section>
  );
};

export default Examples;
