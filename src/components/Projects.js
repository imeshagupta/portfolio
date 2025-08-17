import styles from "../styles/Projects.module.css";
// import multiFusionImg from "../assets/project1.png";
// import ninjaQuizImg from "../assets/project2.png";
import portfolioImg from "../assets/portfolioWebsiteImg.png";
import fund4EduImg from "../assets/project4.png";
import sukoonNamaImg from "../assets/project5.png";
// import myNotesAppImg from "../assets/project6.png";
import mausamLiveImg from "../assets/mausamLiveImg.png";
import clockVoiceAppImg from "../assets/clockVoiceAppImg.png";

const projectList = [
  // {
  //   title: "Multi-Fusion Convert",
  //   description:
  //     "A dynamic unit conversion tool that supports multiple categories like temperature, weight, distance, etc. Built with React, offering a smooth and responsive experience for everyday practical use.",
  //   image: multiFusionImg,
  //   link: "https://multi-fusion-convert.netlify.app/",
  // },
  // {
  //   title: "Ninja Coding Quiz",
  //   description:
  //     "A stylish quiz app designed for developers to test coding knowledge through MCQs. Covers topics like HTML, CSS, and JavaScript in a fun and interactive format.",
  //   image: ninjaQuizImg,
  //   link: "https://ninja-coding-quiz.netlify.app/",
  // },
  {
    title: "Fund4Edu",
    description:
      "A conceptual platform designed to help students explore funding opportunities for education. Features a clean layout, smooth navigation, and focuses on accessibility, awareness, and meaningful impact.",
    image: fund4EduImg,
    link: "https://fund4edu.netlify.app/",
  },
  {
    title: "Clock Mobile App | React Native, Voice API",
    description:
      "A multifunctional mobile app featuring Alarm, Timer, Stopwatch, and World Clock. Includes voice commands for Stopwatch actions and uses AsyncStorage for data persistence with modular, intuitive UI.",
    image: clockVoiceAppImg,
    link: "https://github.com/imeshagupta/clock-voice-mobile-app.git",
  },
  {
    title: "Mausam-Live | React.js, Bootstrap, APIs",
    description:
      "A responsive web app delivering real-time weather updates and news. Integrated APIs provide data on temperature, humidity, wind, and sunrise/sunset, displayed with clean visuals and modern design.",
    image: mausamLiveImg,
    link: "https://mausam-live.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to highlight skills, projects, and contact information. Built using React and Bootstrap, it offers smooth animations, responsive sections, and a minimal yet professional design.",
    image: portfolioImg,
    link: "#",
  },
  {
    title: "SukoonNama",
    description:
      "A personal poetry platform presenting my original Hindi shayaris and poems, thoughtfully categorized by themes. Built with React, featuring a soothing, elegant UI that reflects the soulful essence of writing.",
    image: sukoonNamaImg,
    link: "https://sukoonnama.netlify.app/",
  },

  // {
  //   title: "myNotesApp",
  //   description:
  //     " A simple mobile app using React Native for taking and managing notes. Users can add, edit, delete, and mark notes as favorite.",
  //   image: myNotesAppImg,
  //   link: "https://github.com/imeshagupta/myNotesApp.git",
  // },
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
