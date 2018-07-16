export const MSG_ADD = 'MSG_ADD';
export const MSG_ADD_SUCCESSFUL = 'MSG_ADD_SUCCESSFUL';

const createAction = type => payload => ({ type, payload });

export default {
  addMsg: createAction(MSG_ADD)
};
