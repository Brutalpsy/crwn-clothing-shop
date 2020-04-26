import cartActionTypes from './cart.types';

export const toggleDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  item,
});
