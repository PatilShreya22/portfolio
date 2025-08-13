import React from 'react';
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export const Experience = () => {
  return  <section id="experience" className={styles.container}>
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content}>
      <div className={styles.skills}>
        {
          skills.map((skill,id)=>{
            return <div key={id} className={styles.skill}>
              <div className={styles.skillImangeContainer}><img  src={skill.imageSrc} alt={skill.title} /></div>
              <p>{skill.title}</p>
            </div>
          }
          )
        }

      </div>
      <ul className={styles.history}>
        {history.map((historyItem,id)=> {
          return <li key={id} className={styles.ui}>
            <li className={styles.histItem}>
            <div className={StylePropertyMapReadOnly.histDetails}>
            <h3>{historyItem.role}</h3>
            </div>
            </li>
            
            
          </li>
        })}
      </ul>
    </div>
  </section>;
};


