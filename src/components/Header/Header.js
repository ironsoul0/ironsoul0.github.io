import React from 'react';
import styles from './Header.css';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <a href="https://ironsoul.me" rel="noopener noreferrer" target="_blank" className={styles.logo}>
        ironsoul
      </a>
      <img
        className={styles.logoPicture}
        src={require('../../assets/images/ironman-logo.png')}
        alt="ironman"
      />
    </div>
  );
};

export default Header;