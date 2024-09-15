import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 3,
    link: "https://www.linkedin.com/in/saurav-rawat-plus/",
    icon: <FaLinkedin />,
  },
  { id: 4, link: "https://github.com/Saurav-Rawat", icon: <AiFillGithub /> },
  {
    id: 1,
    link: "https://www.youtube.com/@humpteezee9228",
    icon: <FaYoutube />,
  },
  { id: 2, link: "https://medium.com/@rawatsaurav889", icon: <FaMedium /> },
];
