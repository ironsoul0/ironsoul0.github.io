import React from 'react';
import styles from './AboutMe.css';

const AboutMe = (props) => {
  return (
    <div className={[styles.container, styles.clearfix].join(' ')}>
      <h1 className={styles.headingAboutMe}>
        Who am I and what a hell are you doing here?
      </h1>
      <div className={styles.infoAboutMe}>
        <p>
          My name is Temirzhan Yussupov. I am a simple boy who wants to create something useful for people.
        </p>
        <p>
          Until now, I participated in programming olympiads,
          mostly coding in C++. Now I am focused on developing
          my skills to create real products by implementing my own
          ideas.
        </p>
        <p>
          I am also intersted in magic tricks, playing guitar
          and sport. Feel free to message me <span>😉</span>
        </p>
        <a href="https://t.me/ironsoul0" rel="noopener noreferrer" target="_blank" className={[styles.actionButton, styles.workWithMe].join(' ')}>
          Message me
        </a>
        <a href="https://github.com/ironsoul0" rel="noopener noreferrer" target="_blank" className={[styles.actionButton, styles.githubButton].join(' ')}>
          Github
        </a>
      </div>
    </div>
  );
};

export default AboutMe;