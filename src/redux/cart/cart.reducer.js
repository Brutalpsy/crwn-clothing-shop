import cartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  isShown: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isShown: !state.isShown,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item),
      };
    default:
      return state;
  }
};
export default cartReducer;
