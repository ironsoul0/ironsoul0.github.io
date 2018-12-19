import React from 'react';
import styles from './Header.css';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        ironsoul
      </h1>
      <img 
        className={styles.logoPicture} 
        src={require('../../assets/images/ironman-logo.png')} 
        alt="ironman" 
      />
    </div>
  );
};

export default Header;