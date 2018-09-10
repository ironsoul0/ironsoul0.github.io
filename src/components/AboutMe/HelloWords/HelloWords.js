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
        Привет!
      </h2>
      <p className={styles.description}>
        Меня зовут Юсупов Темиржан, a.k.a. <span className={styles.ironsoul}>ironsoul</span>.
        Я люблю программировать, изучать и создавать
        что-то ценное.
      </p>
    </div>
  );
}

export default HelloWords;