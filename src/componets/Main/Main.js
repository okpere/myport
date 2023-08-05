import logo from "../../assets/intro-bg.jpg";
import "./Main.css";
import { ImBehance, ImFacebook, ImLinkedin2, ImTumblr } from "react-icons/im";
import { FiChevronDown } from "react-icons/fi";

const Main = () => {
  return (
    <section
      className="intro"
      style={{
        backgroundImage: `url(${logo})`,
      }}
    >
      <div className="intro-names">
        <h1>Hello, World.</h1>
        <h2>I'm Okpere Ose Clinton.</h2>
        <p>Front-End Developer & Ux-Ui Designer</p>
        <div className="into-button">
          <button>
            MORE ABOUT ME <FiChevronDown />
          </button>
          <button>
            MY PORTFOLIO <FiChevronDown />
          </button>
        </div>
      </div>

      <div className="intro-links">
        <ImBehance />
        <ImFacebook />
        <ImLinkedin2 />
        <ImTumblr />
      </div>
    </section>
  );
};

export default Main;
