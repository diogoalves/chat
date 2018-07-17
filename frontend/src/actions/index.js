export const MSG_ADD = 'MSG_ADD';
export const MSG_ADD_SUCCESSFUL = 'MSG_ADD_SUCCESSFUL';
export const USER_SET = 'USER_SET';
export const USERS_QUANTITY_SET = 'USERS_QUANTITY_SET';

const createAction = type => payload => ({ type, payload });

export default {
  addMsg: createAction(MSG_ADD),
  setUser: createAction(USER_SET)
};
