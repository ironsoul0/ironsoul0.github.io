import React from 'react';
import styles from './Header.css';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <Headroom>
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            src={require('../../assets/images/logo.png')}
            className={styles.logo}
            alt="Logo"
          />
          <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
              <li className={styles.navigationItem}>
                <NavLink className={styles.navigationLink} style={props.about ? {color: "#839B94"} : null} to="/">
                  Обо мне
                </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <NavLink className={styles.navigationLink} style={props.about ? null : {color: "#839B94"}} to="/blog">
                  Блог
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Headroom>
  );
};

export default Header;