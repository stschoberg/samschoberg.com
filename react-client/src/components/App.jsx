import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider
const trackingId = "UA-143618936-1"; 


class App extends Component {

  // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);
  ReactGA.set({userId: auth.currentUserId()});
  render() {
    return (
      <Router>
        <div>
          <Route name="home" exact path="/" component={HomePage} />
        </div>
      </Router>
    )
  }
}

export default App;