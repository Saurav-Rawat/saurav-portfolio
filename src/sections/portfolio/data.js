import Image1 from "../../assets/project1.jpg";
import Image2 from "../../assets/project2.jpg";
import Image3 from "../../assets/project3.jpg";
import Image4 from "../../assets/project4.jpg";
import Image5 from "../../assets/project5.jpg";
import Image7 from "../../assets/project7.jpg";
import Image8 from "../../assets/project8.jpg";
import Image9 from "../../assets/project9.jpg";
import Image10 from "../../assets/project10.jpg";
import Image11 from "../../assets/project11.jpg";
import Image12 from "../../assets/project12.jpg";

const data = [
  {
    id: 1,
    category: ["backend"],
    image: Image1,
    title: "Creating Artifacts and caching workflows in GitHub Actions",
    desc: "Workflows explaining how to generate and use artifacts and outputs in jobs and how to perform caching in workflows(in this repo dependency caching))",
    github: "https://github.com/Saurav-Rawat/actions-jobs-atrifacts-and-output",
  },
  {
    id: 2,
    category: ["frontend", "backend"],
    image: Image2,
    title: "Ecom Clothing App",
    desc: "An Ecom clothing application like H&M. backend server tech stack: nodejs, express.js, firebase, passport.js, bcrypt and Jwt. frontend client tech stack: react, redux, redux-thunk, react-router-dom and axios.",
    demo: "https://elegant-hotteok-466867.netlify.app",
    github: "https://github.com/Saurav-Rawat/clothing-ecom-app",
  },
  {
    id: 3,
    category: ["frontend"],
    image: Image3,
    title: "What is Javascript Engine?",
    desc: "A comprehensive blog post that explains What is a JavaScript Engine? In this article, I delve into the inner workings of JavaScript engines, exploring their role in executing JavaScript code, the compilation process, and performance optimization techniques.",
    read: "https://medium.com/@rawatsaurav889/what-is-javascript-engine-8cc1722f1607",
  },
  {
    id: 4,
    category: ["frontend"],
    image: Image4,
    title: "How to change tabs conditionally while using Angular Material Tabs",
    desc: "A detailed blog post on how to change tabs conditionally while using Angular Material Tabs. In this article, I provide a step-by-step guide, discussing various techniques and best practices for implementing conditional tab navigation in Angular applications.",
    read: "https://medium.com/search?q=How+to+change+tabs+conditionally+while+using+Angular+Material+Tabs",
  },
  {
    id: 5,
    category: ["frontend"],
    image: Image5,
    title: "Creating Protected Routes in Angular applications",
    desc: "A detailed blog post on creating protected routes in Angular applications. In this article, I explain the concepts and implementation steps necessary to secure routes, ensuring that only authorized users can access specific parts of an application.",
    read: "https://medium.com/search?q=Creating+Protected+Routes+in+Angular+applications",
  },
  {
    id: 6,
    category: ["backend"],
    image: Image1,
    title: "Workflow conditions in GitHub Actions",
    desc: "This repository serves as a practical resource for experimenting with workflow conditions in GitHub Actions. It demonstrates how to implement if-else based jobs in workflows, allowing for conditional execution of jobs based on various criteria such as event types, branch names, or environment variables.",
    github: "https://github.com/Saurav-Rawat/workflow-conditions-and-execution",
  },

  {
    id: 7,
    category: ["backend", "frontend"],
    image: Image9,
    title: "Implementing Authentication in React App using JWT",
    desc: "This repository provides a comprehensive guide to implementing authentication in a React application. It showcases various authentication methods, including token-based authentication (JWT) and OAuth, allowing you to secure your app effectively.",
    github: "https://github.com/Saurav-Rawat/backendAuthApp",
  },
  {
    id: 8,
    category: ["frontend"],
    image: Image8,
    title: "Creating Multilingual SPA with Angular",
    desc: "A detailed blog post on creating a multilingual single-page application (SPA) with Angular. In this article, I explain the steps and best practices for implementing internationalization (i18n) in Angular applications, allowing developers to support multiple languages and enhance user accessibility.",
    read: "https://medium.com/search?q=How+to+make+your+Angular+SPA+multilingual",
  },
  {
    id: 9,
    category: ["frontend"],
    image: Image7,
    title: "Implementing Shimmer Ui from scratch",
    desc: "This project shows how to implement infinite scroll in a React app, providing a seamless experience by loading more content as users scroll. Often tested in coding interviews, it demonstrates efficient dynamic content loading and performance optimization in React applications.",
    demo: "https://machine-coding-challenge.netlify.app/shimmer",
    github:
      "https://github.com/Saurav-Rawat/machine-coding-questions/tree/main/src/ShimmerUi",
  },
  {
    id: 10,
    category: ["frontend"],
    image: Image10,
    title: "Implementing infinite scroll in React from scratch",
    desc: "This project shows how to implement infinite scroll from scratch in a React app, offering a seamless user experience by loading more content as users scroll. Commonly tested in machine coding interviews, this feature highlights the ability to manage dynamic content loading efficiently and optimize performance in React applications.",
    demo: "https://machine-coding-challenge.netlify.app/",
    github:
      "https://github.com/Saurav-Rawat/machine-coding-questions/tree/main/src/InfiniteScroll",
  },
  {
    id: 11,
    category: ["frontend"],
    image: Image12,
    title: "Tic Tac Toe With React",
    desc: "This project demonstrates how to implement a classic Tic Tac Toe game using React. Players can input their moves, and the game dynamically updates to highlight the winning combination when achieved. Built with React's state management and component-based architecture, this project showcases how to develop interactive UIs in React while adhering to common interview coding challenges.",
    demo: "https://machine-coding-challenge.netlify.app/tictactoe",
    github:
      "https://github.com/Saurav-Rawat/machine-coding-questions/tree/main/src/TicTacToe",
  },
  {
    id: 12,
    category: ["frontend"],
    image: Image11,
    title: "Implementing text search functionality",
    desc: "This project shows how to implement Search text functionality where users can input a query string to search within a source string. The output highlights all occurrences of the query string within the source text",
    demo: "https://machine-coding-challenge.netlify.app/text-search",
    github:
      "https://github.com/Saurav-Rawat/machine-coding-questions/tree/main/src/TextSearch",
  },
];

export default data;
