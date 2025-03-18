import styles from "../styles/Navbar.module.css"; // Import CSS module

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.customNavbar}`}
    >
      <div className="container">
        <a className={styles.navbarBrand} href="#home">
          Esha Gupta
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ms-auto ${styles.navbarNav}`}>
            {["About", "Skills", "Projects", "Contact"].map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`${styles.navLink} ${styles.hoverEffect}`}
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
