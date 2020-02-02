import React from 'react';
import './app.css';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFound from './pages/NotFound';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (

      <div className="app-container">

        <Router>

          <div className="app">
            <NavBar />
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFound} />
            </Switch>
          </div>

          <>
            <Footer/>
          </>

        </Router>


      </div>

    );
  }
}

export default App;
