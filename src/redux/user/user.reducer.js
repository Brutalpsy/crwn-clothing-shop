import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      const { user } = action;
      return {
        ...state,
        currentUser: user,
      };
    default:
      return state;
  }
};

export default userReducer;
