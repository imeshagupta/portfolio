import styles from "../styles/Projects.module.css";
import multiFusionImg from "../assets/project1.png";
import ninjaQuizImg from "../assets/project2.png";
import portfolioImg from "../assets/project3.png";
import fund4EduImg from "../assets/project4.png";
import sukoonNamaImg from "../assets/project5.png";

const projectList = [
  {
    title: "Multi-Fusion Convert",
    description:
      "A dynamic unit conversion tool that supports multiple categories like temperature, weight, distance, etc. Built with React, offering a smooth and responsive experience for everyday practical use.",
    image: multiFusionImg,
    link: "https://multi-fusion-convert.netlify.app/",
  },
  {
    title: "Ninja Coding Quiz",
    description:
      "A stylish quiz app designed for developers to test coding knowledge through MCQs. Covers topics like HTML, CSS, and JavaScript in a fun and interactive format.",
    image: ninjaQuizImg,
    link: "https://ninja-coding-quiz.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio to showcase projects, skills, and contact information. Designed using React and Bootstrap with smooth animations and a modern, clean layout.",
    image: portfolioImg,
    link: "#",
  },
  {
    title: "Fund4Edu",
    description:
      "A conceptual web platform aimed at helping students find funding opportunities for education. Features an intuitive layout, easy navigation, and a focus on accessibility and impact.",
    image: fund4EduImg,
    link: "#",
  },
  {
    title: "SukoonNama",
    description:
      "A poetic platform that presents Hindi shayaris and poems categorized by themes. Built using React and Firebase, it offers a flowery, elegant UI that matches its soulful content.",
    image: sukoonNamaImg,
    link: "https://sukoonnama.netlify.app/",
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
