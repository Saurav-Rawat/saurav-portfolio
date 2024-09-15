import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Currently I am working as a Software Engineer (Frontend) at Simpplr,
            Where i am building modern intranet software trusted by industry
            leaders such as Zoom, Nutanix, Workday, Coursera, and Fox. I
            leverage cutting-edge technologies like React, Redux, GraphQL, React
            Query, TypeScript, Node.js, and Express to develop robust and
            scalable technical solutions, ensuring edge cases are thoroughly
            addressed.
          </p>
          <p>
            I also have a Master’s degree in Computer Applications (MCA) from
            Chandigarh University, where Learned advanced concepts and skills in
            computer science and software engineering.
          </p>
          <p>
            Previously, I led the frontend team as a Senior Software Engineer in
            a Canadian product-based company, where I successfully built and
            shipped three products from scratch using Angular, Node.js, Nest.js,
            and Express. I have four years of experience in web application
            development, optimizing frontends, creating reusable components, and
            mobile-responsive UI. I am passionate about learning new
            technologies and delivering high-quality products.
          </p>
          <p>
            I also maintain a YouTube channel where I regularly upload videos
            solving famous frontend coding problems, enhancing community
            engagement and knowledge sharing
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
