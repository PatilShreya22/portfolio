import React from 'react';
import styles from "./Hero.module.css";
export const Hero = () =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Shreya Bharamanna Patil
            </h1>
            <p className={styles.description}> I am a Computer Science and Engineering student passionate about web development and DSA.
                 I enjoy solving problems and building efficient solutions while continuously learning and improving my skills.

            </p>
            <a href="mailto:shreyapatil.cs23@bmsce.ac.in" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="/assets/hero/heroImage.png" alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;

};