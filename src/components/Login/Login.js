import PropTypes from'prop-types';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Redirect } from "react-router-dom";

const Login = ({ username, redirection, handleSubmit, handleChange }) => {
  return (
    !redirection ? (
      <div className="Login">
        <Card style={{ width: '18rem', margin: "auto", marginTop: "25%" }}>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="usernameGroup">
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => handleChange(e.target.value)}
                  autoFocus
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Log in
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    ) : (
      <Redirect to='/'/>
    )
  );
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  redirection: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Login;
