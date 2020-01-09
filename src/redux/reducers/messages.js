const INITIAL_STATE = {
  username: "",
  messages: [],
  loading: false,
  error: ""
};

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages:
          [
            ...state.messages,
            {user: action.username, message: action.message, sentAt: new Date(action.sentAt ? action.sentAt : "").toLocaleString()}
          ],
        username: state.username,
        loading: false,
        error: ""
      }
    case 'LOAD_MESSAGES_PENDING':
      return {
        messages: [],
        username: state.username,
        loading: true,
        error: ""
      }
    case 'LOAD_MESSAGES_SUCCESS':
      return {
        messages: state.messages.concat(action.messages.map((value) => {
          return {user: value.username, message: value.message, sentAt: new Date(value.sentAt ? value.sentAt : "").toLocaleString()};
        })),
        username: state.username,
        loading: false,
        error: ""
      }
    case 'LOAD_MESSAGES_ERROR':
      return {
        messages: [],
        username: state.username,
        loading: false,
        error: "Error encountered !!!"
      }
    case 'ADD_USERNAME':
      return {
        ...state,
        username: action.username,
      }
    default:
      return state
  }
}

export default messages;
