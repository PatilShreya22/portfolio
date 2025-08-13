import React from 'react';
import styles from "./About.module.css";
export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
    <img className={styles.aboutImg} 
    src="\assets\about\aboutImage.png" 
    alt="Me sitting with the Laptop" />
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src="\assets\about\cursorIcon.png" alt="cursorIcon" />
          <div className={styles.aboutItemText}>
            <h3>Web Developer</h3>
            <p>I am passionate about web development and full-stack development, as I love building interactive and user-friendly applications. I enjoy exploring new technologies and frameworks to create seamless and efficient digital experiences.</p></div>
          
        </li>
        <li className={styles.aboutItem}><img src="\assets\about\dsa.png" alt="serverIcon"  />
        <div className={styles.aboutItemText}>
          <h3>Data Structure and Algorithms</h3>
            <p>I have a strong interest in Data Structures and Algorithms (DSA) and enjoy solving algorithmic challenges to enhance my problem-solving skills. Continuously improving my coding efficiency, I explore various techniques to write optimized and scalable solutions.</p>
            </div>
        </li>
        <li className={styles.aboutItem}><img src="\assets\about\craft.png" alt="craftIcon"  />
        <div className={styles.aboutItemText}> <h3>Craft Making</h3>
        <p>I have a keen eye for detail and enjoy exploring creative pursuits like craft making, which enhances my design thinking and problem-solving skills.</p>
        </div>
        
        </li>
    </ul>
    </div>
  </section>
};
