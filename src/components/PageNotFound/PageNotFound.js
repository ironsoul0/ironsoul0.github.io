import React from 'react';
import styles from './PageNotFound.css';
import { NavLink } from 'react-router-dom';

const PageNotFound = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.text}>
          404
        </p>
        <NavLink className={styles.return} to="/">
          На главную
        </NavLink>
      </div>
    </div>
  );
}

export default PageNotFound;