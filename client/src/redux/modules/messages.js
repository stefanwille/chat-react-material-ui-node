import STOCK_AVATARS from '../../StockAvatars';

const marissa = { userName: 'marissa', avatarUrl: STOCK_AVATARS[2] };
const jennifer = { userName: 'jennifer', avatarUrl: STOCK_AVATARS[3] };

const INITIAL_STATE = [
  {
    id: 2,
    user: marissa,
    timestamp: new Date(),
    text: 'Cool, das funktioniert.'
  },
  {
    id: 3,
    user: jennifer,
    timestamp: new Date(),
    text: 'Cool, das funktioniert.'
  }
];

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    payload: message
  };
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload];
    default:
      return state;
  }
}

export function getMessages(state) {
  return state.messages;
}
export default reducer;
