import React from 'react';
import styles from './Footer.css';

const Footer = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.info}>
        © 2018 Yussupov Temirzhan. All rights reserved.
      </p>
      <p className={[styles.info, styles.creator].join(' ')}>
        Created with <span className={styles.heart}>♥</span> at <a className={styles.linkNU} href="https://nu.edu.kz/" rel="noopener noreferrer" target="_blank">NU</a>
      </p>
    </div>
  );
}

export default Footer;