import styles from "../styles/Footer.module.css"; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Esha Gupta | All Rights Reserved
        </p>
        <div className={styles.socialIcons}>
          <a
            href="mailto:eshagupta515@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://linkedin.com/in/imeshagupta"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/imeshagupta"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://leetcode.com/eshagupta27"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className="fas fa-code"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
