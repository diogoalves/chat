export const MSG_ADD = 'MSG_ADD';

const createAction = type => payload => ({ type, payload });

export default {
  addMsg: createAction(MSG_ADD)
};
