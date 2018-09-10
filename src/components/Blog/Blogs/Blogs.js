import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = (props) => {
  return (
    <React.Fragment>
      <BlogCard
        imageSource={require('./Blog_N17R/Blog_N17R.png')}
        blogTitle="Поездка на nFactorial 2018"
        blogDescription="Мои мысли о таком прекрасном событии как N17R, которое прошло этим летом"
        blogBackgroundColor="#31355B"
        blogButtonColor="#4299ED"
        to="/blog/N17R"
      />
      {/*<BlogCard
        imageSource={require('./Blog_NU/Blog_NU.png')}
        blogTitle="Поступление в Назарбаев Университет"
        blogDescription="Все, что связно со мной и этим чудесным местом :)"
        blogBackgroundColor="#66A7D5"
        blogButtonColor="#A8D7F9"
        to="/blog/NU"
      />*/}
    </React.Fragment>
  );
}

export default Blogs;