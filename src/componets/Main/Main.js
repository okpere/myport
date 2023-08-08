import logo from "../../assets/intro-bg.jpg";
import "./Main.css";

import { ImBehance, ImLinkedin2 } from "react-icons/im";
import { FiChevronDown } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-scroll";

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
          <Link  to="about" smooth={true} duration={1000}>
          <button>
            MY PORTFOLIO <FiChevronDown />
          </button>
          </Link>
          
          <Link  to="examples" smooth={true} duration={1000}>
          <button>
            MORE ABOUT ME <FiChevronDown />
          </button>
          </Link>
        </div>
      </div>

      <div className="intro-links">
        <a
          href="https://www.linkedin.com/in/clinton-okpere-404a8421a/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ImLinkedin2 />
        </a>
        <a
          href="https://github.com/okpere"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.behance.net/clintonokpere"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ImBehance />
        </a>
        <a
          href="https://twitter.com/OkpereC/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoLogoTwitter />
        </a>

        
        
        
      </div>
    </section>
  );
};

export default Main;
