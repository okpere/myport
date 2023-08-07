// ImageContainer.js
import "./ImageContainer.css";

const ImageContainer = ({ imagePath, displayText, imageHeight , displayWork}) => {

  return (
    <div
      className="image-container"
      style={{
        height: `${imageHeight}px`,
      }}
    >
      <div
        className="image-overlay"
        style={{
          backgroundImage: `url('${imagePath}')`,
        }}
      >
        <p className="hover-text">{displayText}</p>
        <p className="displaywork">{displayWork}</p>
      </div>
    </div>
  );
};

export default ImageContainer;
