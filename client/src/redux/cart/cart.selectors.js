import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accummulated, item) => accummulated + item.quantity, 0)
);

export const selectDropdownShown = createSelector(
  [selectCart],
  (cart) => cart.isShown
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accummulated, item) => item.quantity * item.price + accummulated,
    0
  )
);
