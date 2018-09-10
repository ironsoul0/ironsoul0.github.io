import React, { Component } from 'react';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Blog_N17R from './components/Blog/Blogs/Blog_N17R/Blog_N17R';
import Blog_NU from './components/Blog/Blogs/Blog_NU/Blog_NU';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { HashRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={AboutMe} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/blog/N17R" component={Blog_N17R} />
          <Route path="/blog/NU" component={Blog_NU} />
          <Route component={PageNotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
