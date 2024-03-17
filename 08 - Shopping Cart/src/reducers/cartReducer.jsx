export const ACTIONS = {
  ADD_TO_CART: 'add-to-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
  UPDATE_QUANTITY: 'update-quantity',
};

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case ACTIONS.REMOVE_FROM_CART:
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      const removedItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      const updatedTotalPrice =
        state.totalPrice - removedItem.price * removedItem.quantity;
      return {
        ...state,
        cartItems: updatedCartItems,
        totalPrice: updatedTotalPrice,
      };
    case ACTIONS.UPDATE_QUANTITY:
      const { id, quantity } = action.payload;
      const updatedCartItemsWithQuantity = state.cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      });
      const updatedTotalPriceWithQuantity = updatedCartItemsWithQuantity.reduce(
        (total, item) => {
          return total + item.price * item.quantity;
        },
        0,
      );
      return {
        ...state,
        cartItems: updatedCartItemsWithQuantity,
        totalPrice: updatedTotalPriceWithQuantity,
      };

    default:
      return state;
  }
}

export default cartReducer;
