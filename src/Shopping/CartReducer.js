export const CartReducer = (state = [], action) => {
  if (action.type === "Add") {
    let tempcart = state.filter((item) => item.id === action.payload.id);
    console.log(state);
    if (tempcart < 1) {
      return [...state, action.payload];
    } else {
      return state;
    }
  }
  if (action.type === "Increase") {
    let tempcart = state.map((item) => {
      if (item.quantity === action.payload.quantity) {
        return { ...item, id: item.id + 1 };
      } else {
        return item;
      }
    });
    return tempcart;
  }
  if (action.type === "Decrease") {
    let tempcart = state.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, id: item.id - 1 };
      } else {
        return item;
      }
    });
    return tempcart;
  }
  if (action.type === "Remove") {
    return state.filter((item) => item.id !== action.payload.id);
  }
};
