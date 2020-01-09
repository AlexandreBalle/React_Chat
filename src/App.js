import React from 'react';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FormattedMessage } from 'react-intl';

import './App.css';
import ChatContainer from './components/Chat/Container/ChatContainer';
import LoginContainer from './components/Login/Container/LoginContainer';

const mapStateToProps = (state) => {
  return {
    username: state.messages.username
  }
}

const App = ({ username }) => {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" style={{ zIndex: 9 }}>
          <Link to="/" className="navbar-brand">React Chat</Link>
          <Nav className="mr-auto">
            {!username && 
              <Link to="/login" className="nav-link">
                <FormattedMessage id="app.header.login"
                      defaultMessage="Login"
                      description="Link to log in"/>
              </Link>}
          </Nav>
          <Nav>
            {username && 
              <Navbar.Text>
                <FormattedMessage id="app.header.login.info"
                      defaultMessage="You are :"
                      description="Tell you what's this =>"/> : {username}
              </Navbar.Text>}
          </Nav>
        </Navbar>
        <Route exact path="/" component={ChatContainer}/>
        <Route path="/login" component={LoginContainer}/>
      </Router>
    </div>
  );
}

export default connect(
  mapStateToProps,
  null
)(App)
