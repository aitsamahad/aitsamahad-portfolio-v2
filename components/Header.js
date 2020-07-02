import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <header id="particles-js">
      <div
        className={`menu-toggler ${toggler ? "open" : ""}`}
        onClick={() => setToggler(!toggler)}
      >
        <div className="bar half start"></div>
        <div className="bar"></div>
        <div className="bar half end"></div>
      </div>
      <nav className={`top-nav ${toggler ? "open" : ""}`}>
        <ul className="nav-list" onClick={() => setToggler(!toggler)}>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => setToggler(!toggler)}
            >
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => setToggler(!toggler)}
            >
              Services
            </Link>
          </li>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => setToggler(!toggler)}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => setToggler(!toggler)}
            >
              Experience
            </Link>
          </li>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => setToggler(!toggler)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="landing-text">
        <img
          src="/images/aitsam-ahad.png"
          alt="aitsam ahad logo"
          className="logo"
        />
        <h6>MERN Full Stack | React Native Developer</h6>
      </div>
    </header>
  );
};

export default Header;
