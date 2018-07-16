import { MSG_ADD_SUCCESSFUL, USER_SET } from '../actions';

export const initialState = {
  messages: [],
  user: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MSG_ADD_SUCCESSFUL:
      return {
        ...state,
        messages: [...state.messages, payload]
      };

    case USER_SET:
      return {
        ...state,
        user: payload
      };

    default:
      return state;
  }
};

export default reducer;
