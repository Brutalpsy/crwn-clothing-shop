import React from 'react';
import SripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_SgKQsn68XKW9vvlX8w5HIQpH00gitJEHud';

  const onToken = async (token) => {
    try {
      await axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token,
        },
      });
      alert('Payment successful');
    } catch (error) {
      console.log('Payment error: ', error.message);
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card.'
      );
    }
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
