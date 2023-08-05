import logo from "../../assets/intro-bg.jpg";
import "./intro.css";
import { ImBehance, ImFacebook, ImLinkedin2, ImTumblr } from "react-icons/im";
import { FiChevronDown } from "react-icons/fi";

const Intro = () => {
  return (
    <section
      className="intro"
      // style={{
      //   backgroundImage: `url(${logo})`,
      //   // backgroundRepeat: "no-repeat",
      //   backgroundSize: "contain, cover",
      // }}
    >
      <div className="intro-names">
        <>working</>
        <h1>Hello World</h1>
        <h2>I'm Okpere Ose Clinton.</h2>
        <p>Front-End Developer & Ux-Ui Designer</p>
        <div>working</div>
        <button>
          More About Me <FiChevronDown />
        </button>
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

export default Intro;
