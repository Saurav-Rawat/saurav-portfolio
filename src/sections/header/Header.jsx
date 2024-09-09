import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import "./header.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Saurav Rawat</h3>
        <p data-aos="fade-up">
          Having 4+ years of experience working on the front end, I excel in
          creating scalable frontend features and optimizing existing ones. I
          have expertise in technologies like React, Redux, GraphQL, React
          Query, TypeScript, JavaScript, HTML5, and CSS3, and version control
          tools like Git and GitHub. Additionally, I have strong skills in data
          structures and system design, and I thrive in a continuous
          agile-driven environment.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Projects
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
