import React from 'react';
import styles from './Skills.css';

const Skill = (props) => {
  const additionalStyle = props.reversed ? {
    flexDirection: 'row-reverse'
  } : null;

  const additionalWidth = props.shrinked ? {
    maxWidth: "470px"
  } : null;

  const styling = { ...additionalStyle, ...additionalWidth };

  return (
    <div style={styling} className={styles.skill}>
      <img
        src={props.src}
        alt={props.alt}
        className={styles.skillImage}
      />
      <div className={styles.skillContent}>
        <h3 className={styles.skillName}>
          {props.name}
        </h3>
        <p className={styles.skillDesc}>
          {props.desc}
        </p>
      </div>
    </div>
  );
}

const Skills = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        What I am passionate about?
      </h2>
      <Skill
        alt="Smartphone"
        src={require('../../../assets/images/smartphone.png')}
        name="Mobile apps"
        desc="As a participant of nFactorial Incubator, I learned how to create cross-platofrm mobile apps using React Native framework"
        shrinked
      />
      <Skill
        alt="Computer"
        src={require('../../../assets/images/coding.png')}
        name="Responsive websites"
        desc="Rapidly developing ReactJS framework allows me to create websites of different levels of complexity"
        reversed
      />
      <Skill
        alt="Code"
        src={require('../../../assets/images/browser.png')}
        name="Competitive programming"
        desc="Throughout my school years, I participated in a lot of programming competitions and I am still participating in online contests"
      />
    </div>
  );
}

export default Skills;