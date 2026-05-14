// CheckoutForm.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function CheckoutForm({ productName, amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setErrorMessage('');
    setSuccessMessage('');

    if (!stripe || !elements) {
      setErrorMessage('Stripe not loaded yet');
      setIsProcessing(false);
      return;
    }

    // Create a payment method with the card details
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setErrorMessage(error.message);
      setIsProcessing(false);
      return;
    }

    // Payment successful!
    setSuccessMessage(`Payment successful! Thank you for buying ${productName}`);
    console.log('Payment Method:', paymentMethod);
    
    // Here you would send paymentMethod.id to your backend
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h3>Pay with Card</h3>
      
      <div className="card-element-wrapper">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
          }}
        />
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      <button 
        type="submit" 
        disabled={!stripe || isProcessing}
        className="pay-btn"
      >
        {isProcessing ? 'Processing...' : `Pay $${amount}`}
      </button>
    </form>
  );
}

export default CheckoutForm;