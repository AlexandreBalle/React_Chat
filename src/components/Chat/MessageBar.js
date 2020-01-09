import React from 'react';
import PropTypes from'prop-types';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

const Input = styled(Form.Control)`
  ${({ value }) => value === "" && `
    border: 1px solid red;
    background: #DC5050;
    color: gray;

    &:focus {
      border: 1px solid red;
      background: #DC5050;
      color: gray;
    }
  `},
  ${({ value }) => value !== "" && `
    border: 1px solid green;
    background: #28a745;
    color: #212529;

    &:focus {
      border: 1px solid green;
      background: #28a745;
      color: #212529;
    }
  `}
`;

const MessageBar = ({ message, handleChange, handleSubmit }) => {
  return (
    <div className="MessageBar" style={{ marginTop: "10px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
          <InputGroup className="mb-3">
            <Input
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Message"
              autoFocus
            />
            <InputGroup.Append>
              <Button variant="outline-primary" type="submit">
                <i className="fa fa-paper-plane"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}

MessageBar.propTypes = {
  message: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MessageBar;
