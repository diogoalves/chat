import { MSG_ADD_SUCCESSFUL, USER_SET, USERS_QUANTITY_SET } from '../actions';

export const initialState = {
  messages: [],
  user: null,
  quantity: 0
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

    case USERS_QUANTITY_SET:
      return {
        ...state,
        quantity: payload
      };

    default:
      return state;
  }
};

export default reducer;
