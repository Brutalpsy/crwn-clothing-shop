import React from 'react';
import SripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_SgKQsn68XKW9vvlX8w5HIQpH00gitJEHud';

  const onToken = (token) => {
    console.log(token);
    alert('payment successful');
  };

  return (
    <SripeCheckout
      label='Pay now'
      name='CRWN Cloting Ltc.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
