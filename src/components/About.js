import styles from "../styles/About.module.css";
import profileImage from "../assets/profile.jpeg";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={profileImage}
              alt="Esha Gupta"
              className={`${styles.aboutImg} img-fluid rounded-circle`}
            />
          </div>
          <div className="col-md-7">
            <p className={`${styles.aboutText} ${styles.slideInLeft}`}>
              I'm a{" "}
              <strong className="text-primary">front-end developer</strong> with
              a passion for crafting seamless web experiences. My expertise
              includes{" "}
              <strong className="text-primary">
                React, JavaScript, and UI frameworks,
              </strong>{" "}
              and I aim to build high-performance, interactive websites.
            </p>
            <p className={`${styles.aboutText} ${styles.slideInRight}`}>
              Currently pursuing <strong className="text-primary">MCA</strong>,
              I am continuously learning and creating projects to refine my
              skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
