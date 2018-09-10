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
        Чем я занимаюсь?
      </h2>
      <Skill
        alt="Smartphone"
        src={require('../../../assets/images/smartphone.png')}
        name="Мобильные приложения"
        desc="Благодаря участию в nFactorial Incubator, я научился писать собственные кроссплатформенные приложения на React Native"
        shrinked
      />
      <Skill
        alt="Computer"
        src={require('../../../assets/images/coding.png')}
        name="Адаптивные веб-сайты"
        desc="Знание React позволяет мне с легкостью писать веб-сайты различного уровня сложности"
        reversed
      />
      <Skill
        alt="Code"
        src={require('../../../assets/images/browser.png')}
        name="Олимпиады по программированию"
        desc="В школьные годы, я активно принимал участие в олимпиадах разного уровня и продолжаю принимать участие в онлайн-соревнованиях до сих пор"
      />
    </div>
  );
}

export default Skills;