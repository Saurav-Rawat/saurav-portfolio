import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categorySet = new Set();

  data.forEach((project) => {
    project.category.forEach((category) => categorySet.add(category));
  });

  const uniqueCategories = ["all", ...categorySet];
  console.log(uniqueCategories, { categorySet });

  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    console.log(category);
    const filterProjects = data.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use
        the buttons to toggle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
