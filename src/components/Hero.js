import styles from "../styles/Hero.module.css";
import profileImg from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`container text-center`}>
        <div className="row align-items-center">
          <div className={`col-md-6 ${styles.fadeInLeft}`}>
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.highlight}>Esha Gupta</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Front-End Developer | React Enthusiast
            </p>
            <a
              href="/resume.pdf"
              download="Esha_Gupta_Resume.pdf"
              className={styles.heroBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
          <div className={`col-md-6 ${styles.fadeInRight}`}>
            <img
              src={profileImg}
              alt="Esha Gupta"
              className={`${styles.heroImg} img-fluid`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
