const AVATAR_STEFAN =
  'https://www.xing.com/image/b_b_6_d7a970ff7_3538231_6/stefan-wille-foto.1024x1024.jpg';

const INITIAL_STATE = { userName: 'stefan', avatarUrl: AVATAR_STEFAN };

export function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user
  };
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
}

export function getUser(state) {
  return state.user;
}
export default reducer;
