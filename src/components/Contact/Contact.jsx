import React from 'react'
import styles from "./Contact.module.css"
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="/assets/contact/emailIcon.png" alt="Email Icon" />
                <a href="mailto:shreyapatil.cs23@bmsce.ac.in">shreyapatil.cs23@bmsce.ac.in</a>
            </li>
            <li className={styles.link}>
                <img src="/assets/contact/githubIcon.png" alt="Github Icon" />
                <a href="https://github.com/PatilShreya22/Projects">github.com/PatilShreya22</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
