import React from 'react';
import styles from './BlogCard.css';
import { NavLink } from 'react-router-dom';

const BlogCard = (props) => {
  const cardStyle = {
    backgroundColor: props.blogBackgroundColor
  };

  const buttonStyle = {
    backgroundColor: props.blogButtonColor
  }

  return (
    <div style={cardStyle} className={styles.card}>
      <img
        src={props.imageSource}
        className={styles.blogImage}
        alt="N17R"
      />
      <h2 className={styles.title}>
        {props.blogTitle}
      </h2>
      <p className={styles.description}>
        {props.blogDescription}
      </p>
      <NavLink to={props.to} style={buttonStyle} className={styles.button}>
        Подробнее
      </NavLink>
    </div>
  );
}

export default BlogCard;