export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_A":
      return { ...state, a: action.payload };
    case "UPDATE_B":
      return { ...state, b: action.payload };
    default:
      return state;
  }
}
