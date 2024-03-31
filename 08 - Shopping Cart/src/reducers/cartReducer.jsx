export const ACTIONS = {
  ADD_TO_CART: 'add-to-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
  UPDATE_QUANTITY: 'update-quantity',
};

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

function cartReducer(state = initialState, action) {}

export default cartReducer;
