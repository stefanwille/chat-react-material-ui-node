const INITIAL_STATE = [
  // {
  //   id: 2,
  //   user: marissa,
  //   timestamp: new Date(),
  //   text: "Cool, das funktioniert."
  // },
  // {
  //   id: 3,
  //   user: jennifer,
  //   timestamp: new Date(),
  //   text: "Cool, das funktioniert."
  // }
];

export function addMessage(message) {
  return {
    type: "ADD_MESSAGE",
    payload: message,
  };
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      console.log("state", state);
      if (state.some(message => message.id === action.payload.id)) {
        console.log("skippping");
        return state;
      }
      return [...state, action.payload];
    default:
      return state;
  }
}

export function getMessages(state) {
  return state.messages;
}
export default reducer;
