import React from 'react';
import styles from './AboutMe.css';

const AboutMe = (props) => {
  return (
    <div className={[styles.container, styles.clearfix].join(' ')}>
      <h1 className={styles.headingAboutMe}>
        Who I am and what a hell are you doing there?
      </h1>
      <div className={styles.infoAboutMe}>
        <p>
          My name is Temirzhan Yussupov and I am currently 18
          years old. I am mostly interested in web development, as
          well as having experience in mobile dev too :)
        </p>
        <p>
          Until now, I participated in programming olympiads,
          mostly coding in C++. I am now on the path to teach
          myself not only how to solve problems but also
          how to create something own.
        </p>
        <p>
          I am also intersted in magic tricks, playing guitar
          and sport.
        </p>
        <a href="https://t.me/ironsoul0" rel="noopener noreferrer" target="_blank" className={[styles.actionButton, styles.workWithMe].join(' ')}>
          Work with me
        </a>
        <a href="https://ironsoul.me/CV.pdf" rel="noopener noreferrer" target="_blank" className={[styles.actionButton, styles.checkCV].join(' ')}>
          MY CV
        </a>
      </div>
    </div>
  );
};

export default AboutMe;