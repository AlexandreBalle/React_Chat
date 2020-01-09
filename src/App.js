import React from 'react';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
            {!username && <Link to="/login" className="nav-link">Login</Link>}
          </Nav>
          <Nav>
            {username && <Navbar.Text>Signed in as : {username}</Navbar.Text>}
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
