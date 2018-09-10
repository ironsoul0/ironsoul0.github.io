import React from 'react';
import Header from '../Header/Header';
import Blogs from './Blogs/Blogs';
import Footer from '../Footer/Footer';
import ScrollToTopOnMount from '../ScollToTopOnMount/ScrollToTopOnMount';

const Blog = (props) => {
  return (
    <React.Fragment>
      <ScrollToTopOnMount />
      <Header />
      <Blogs />
      <Footer />
    </React.Fragment>
  );
}

export default Blog;