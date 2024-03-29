import cartActionTypes from './cart.types';

export const toggleDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  item,
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});

export const updateCartInFirebase = () => ({
  type: cartActionTypes.UPDATE_CART_IN_FIREBASE,
});

export const setCartFromFirebase = (cartItems) => ({
  type: cartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems,
});
