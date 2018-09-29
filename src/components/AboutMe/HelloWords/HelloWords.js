import React from 'react';
import styles from './HelloWords.css';

const HelloWords = (props) => {
  return (
    <div className={styles.container}>
      <img
        src={require('../../../assets/images/logo.png')}
        alt="Logo"
        className={styles.logo}
      />
      <h2 className={styles.heading}>
        Hi!
      </h2>
      <p className={styles.description}>
        My name is Yussupov Temirzhan, a.k.a. <span className={styles.ironsoul}>ironsoul</span>.
        I am a freshman student loving to code, discover and create valuable things.
      </p>
    </div>
  );
}

export default HelloWords;