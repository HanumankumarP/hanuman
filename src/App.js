import './bootstrap/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Profile from './profile.png';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Resume from './components/Resume';

class App extends Component {
state={
  nav:'resume'
}
  render() {
    var styles={
      boxShadow:'0px 6px 6px -6px #000',
      top:'50px'
    };
    return (
      <Router>
      <div className="app">
      <Route exact path="/" render={()=>(
        <div className="col-md-3 offset-4">
          <div className="card bg-default" style={styles}>
              <div className="card-body">
                <img src={Profile} alt="Profile"/>
                <h4> HANUMAN KUMAR P </h4>
                <Link to="/Resume" className="btn btn-primary btn-block btn-sm" style={styles}> View Profile </Link>

              </div>
            </div>
        </div>
      )}/>
      </div>
      <Route path="/Resume" exact component={Resume} />
      </Router>
    );
  }
}

export default App;
