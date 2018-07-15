import { MSG_ADD } from '../actions';

export const initialState = {
  messages: [
    { time: 1531511914169, author: 'anonymous', content: 'lorem ipsum' }
  ],
  user: 'anonymous',
  connection: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MSG_ADD:
      return {
        ...state,
        messages: [...state.messages, { ...payload, author: state.user }]
      };

    default:
      return state;
  }
};

export default reducer;
