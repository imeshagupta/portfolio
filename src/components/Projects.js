import React from "react";
import styles from "../styles/Projects.module.css"; // Import CSS module
import multiFusionImg from "../assets/project1.png";
import ninjaQuizImg from "../assets/project2.png";
import portfolioImg from "../assets/project3.png";
import fund4EduImg from "../assets/project4.png";

const projectList = [
  {
    title: "Multi-Fusion Convert",
    description:
      "A versatile unit conversion tool supporting various categories.",
    image: multiFusionImg,
    link: "https://multi-fusion-convert.netlify.app/",
  },
  {
    title: "Ninja Coding Quiz",
    description:
      "An interactive quiz app with multiple categories and random questions.",
    image: ninjaQuizImg,
    link: "https://ninja-coding-quiz.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React & Bootstrap.",
    image: portfolioImg,
    link: "#",
  },
  {
    title: "Fund4Edu",
    description:
      "A funding platform to help students receive financial support.",
    image: fund4EduImg,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className="container">
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.projectGrid}>
          {projectList.map((project, index) => (
            <div key={index} className={styles.colMd4}>
              <div className={styles.projectCard}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  className={`btn btn-primary ${styles.btnPrimary}`}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
