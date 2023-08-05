// ImageContainer.js
import "./ImageContainer.css";

const ImageContainer = ({ imagePath, displayText, imageHeight , displayWork}) => {

  return (
    <div
      className="image-container"
    >
      <div
        className="image-overlay"
        style={{
          backgroundImage: `url('${imagePath}')`,
          height: `${imageHeight}px`,
        }}
      >
        <p className="hover-text">{displayText}</p>
        <p className="displaywork">{displayWork}</p>
      </div>
    </div>
  );
};

export default ImageContainer;
