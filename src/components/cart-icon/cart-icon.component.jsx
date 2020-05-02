import React from 'react';
import {
  ItemCountContainer,
  CartIconContainer,
  ShoppingIconContainer,
} from './cart-icon.styles.jsx';
import { connect } from 'react-redux';
import { toggleDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleDropdown, itemCount }) => (
  <CartIconContainer onClick={toggleDropdown}>
    <ShoppingIconContainer className='shopping-icon' />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapStateToPorps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToPorps, mapDispatchToProps)(CartIcon);
