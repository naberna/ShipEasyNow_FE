import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../actions/orderFormActions';

export default function BookShipmentForm () {
  
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
  };
  return (
    <div id="PaymentForm">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <div className="payment-box">
              <div className="title">$0 Due now</div>
              Your credit card will not be charged until the order is assigned
              to a carrier.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <Form className="payment shadow p-3 mb-5" onSubmit={submitHandler}>
              <div>
                <input
                  type="radio"
                  id="paypal"
                  value="PayPal"
                  name="paymentMethod"
                  required
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label htmlFor="paypal">PayPal</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="creditcard"
                  value="CreditCard"
                  name="paymentMethod"
                  required
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label htmlFor="creditcard">Credit Card</label>
              </div>
            </Form>
          </div>
        </div>
      </div>
  );
}