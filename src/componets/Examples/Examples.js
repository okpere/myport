import React from "react";
import ImageContainer from "../../ImageContainer/ImageContainer";
import "./Examples.css";

// Import the images using their relative paths
import liberty from "../../assets/liberty.jpg";
import lighthouse from "../../assets/lighthouse.jpg";
import beetle from "../../assets/beetle.jpg";
const Examples = () => {
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
    <section className="examples">
      <div className="examples_info">
        <h4>PORTFOLIO</h4>
        <p>Check Out Some of My Works.</p>
        <p>
          Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing
          dolore officia nisi aliqua incididunt Ut veniam lorem ipsum
          Consectetur ut in in eu do.
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
