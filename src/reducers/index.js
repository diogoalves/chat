import { MSG_ADD_SUCCESSFUL } from '../actions';

export const initialState = {
  messages: [
    { time: 1531511914169, author: 'anonymous', content: 'lorem ipsum' }
  ],
  user: 'anonymous'
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MSG_ADD_SUCCESSFUL:
      return {
        ...state,
        messages: [...state.messages, payload]
      };

    default:
      return state;
  }
};

export default reducer;
