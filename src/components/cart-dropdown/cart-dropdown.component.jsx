import React from 'react';
import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleDropdown } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const navigateToCheckout = () => {
    history.push('/checkout');
    dispatch(toggleDropdown());
  };

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'> Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={navigateToCheckout}> GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleDropdown: () => dispatch(toggleDropdown()),
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
