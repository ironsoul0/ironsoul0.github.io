import React, { Component } from 'react';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Blog_N17R from './components/Blog/Blogs/Blog_N17R/Blog_N17R';
import Blog_NU from './components/Blog/Blogs/Blog_NU/Blog_NU';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} component={AboutMe} exact />
          <Route path={process.env.PUBLIC_URL + '/blog'} component={Blog} exact />
          <Route path={process.env.PUBLIC_URL + '/blog/N17R'} component={Blog_N17R} exact />
          <Route path={process.env.PUBLIC_URL + '/blog/NU'} component={Blog_NU} exact />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
