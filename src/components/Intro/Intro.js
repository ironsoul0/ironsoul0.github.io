import React from 'react';
import styles from './Intro.css';
import WordSlider from '../WordSlider/WordSlider';

const Intro = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.me}>
            I'm 
            <WordSlider duration={2000}>
              <span>ironsoul</span>
              <span>a dreamer</span>
              <span>a believer</span>
            </WordSlider>
        </h1>
          <h1 className={styles.desc}>
            19 years old inspired developer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;