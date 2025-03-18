import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_irawtds",
        "template_jpx7izx",
        form.current,
        "QKOutAFY8e2Wp4Rsg"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Your message has been sent successfully!");
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert(
            "There was an error sending your message. Please try again later."
          );
        }
      );
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* Left Side */}
        <div className={styles.contactLeft}>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <p className={styles.contactText}>
            Feel free to reach out to me through any of the platforms below!
          </p>

          {/* Social Media Links with Icons */}
          <div className={styles.contactIcons}>
            <a
              href="mailto:eshagupta515@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/imeshagupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/imeshagupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/eshagupta27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://instagram.com/i.esha.27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/imeshagupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className={styles.contactRight}>
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className={styles.contactBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
