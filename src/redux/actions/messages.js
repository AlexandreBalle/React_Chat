import websocket from "../../services/websocket";

const axios = require('axios');
const api   = {
  url: "https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages"
};

export const addNewMessage = ({username, message, sentAt}) => {
  console.log(sentAt)
  return (dispatch) => {
    const action = {
      type: 'ADD_MESSAGE',
      username,
      message,
      sentAt
    };
    websocket.send(JSON.stringify(action));

    return dispatch(action);
  };
};

export const addNewUsername = (username) => {
  return {
    type:'ADD_USERNAME',
    username,
  }
};

export const getMessages = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_MESSAGES_PENDING'
    });
    return axios.get(`${api.url}`)
                .then((json) => {
                  dispatch({
                    type: 'LOAD_MESSAGES_SUCCESS',
                    messages: json.data
                  });
                })
                .catch((err) => {
                  dispatch({
                    type: 'LOAD_MESSAGES_ERROR',
                    error: err
                  });
                });
  }
};
