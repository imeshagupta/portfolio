import styles from "../styles/About.module.css";
import profileImage from "../assets/profile.jpeg";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <h2 className={`${styles.sectionTitle} text-center`}>About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={profileImage}
              alt="Esha Gupta"
              className={`${styles.aboutImg} img-fluid `}
            />
          </div>
          <div className="col-md-7">
            <p className={`${styles.aboutText} ${styles.slideInLeft}`}>
              I'm a{" "}
              <strong className="text-primary">front-end developer</strong> with
              a passion for crafting seamless web and mobile experiences. My
              expertise includes{" "}
              <strong className="text-primary">
                React, React Native, JavaScript, and modern UI frameworks,
              </strong>{" "}
              and I strive to build high-performance, interactive applications.
            </p>
            <p className={`${styles.aboutText} ${styles.slideInRight}`}>
              I hold a{" "}
              <strong className="text-primary">
                Master’s degree in Computer Applications (MCA)
              </strong>{" "}
              and continuously build real-world projects to sharpen my skills
              and stay updated with the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
