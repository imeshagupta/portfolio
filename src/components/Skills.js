import styles from "../styles/Skills.module.css";
import htmlLogo from "../assets/htmlLogo.png";
import cssLogo from "../assets/cssLogo.png";
import jsLogo from "../assets/jsLogo.png";
import reactLogo from "../assets/reactLogo.png";
import bootstrapLogo from "../assets/bootstrapLogo.jpeg";
import javaLogo from "../assets/javaLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";

const skills = [
  { name: "HTML", img: htmlLogo },
  { name: "CSS", img: cssLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "React", img: reactLogo },
  { name: "Bootstrap", img: bootstrapLogo },
  { name: "Tailwind CSS", img: tailwindLogo },
  { name: "Java", img: javaLogo },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className="container text-center">
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={styles.skillCard}
              style={{ "--delay": index }}
            >
              <div className={styles.skillBox}>
                <img
                  src={skill.img}
                  alt={skill.name}
                  className={styles.skillIcon}
                />
                <p className={styles.skillName}>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
