import React from 'react';
import styles from './Intro.css';

const Intro = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.me}>
            I'm ironsoul -
        </h1>
          <h1 className={styles.desc}>
            A curious freshman loving to code and create.
        </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;