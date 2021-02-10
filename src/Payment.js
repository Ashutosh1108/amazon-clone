import React, { useEffect, useState } from 'react'
import "./Payment.css";
import { useStateValue } from './StateProvider';
import CheckoutProducts from './CheckoutProducts';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies submits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            getClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])


    const handleSubmit = async (event) => {
        // some fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
            card: elements.getElement(CardElement)

            }
        }).then (({ paymentIntent }) => {
            // paymentintent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        // listen for the changes of the card element
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>


                {/* Payment Section- Delivery address */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>123 React Lane</p>
                            <p>Los Angles, CA</p>
                        </div>
                    </div>
                {/* Payment Section- Review items */}
                    <div className="payment__section1">
                        <div className="payment__title">
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className="payment__items">
                            {basket.map(item => (
                                <CheckoutProducts
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                {/* Payment Section- Payment Method */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className='payment__details'>
                            {/* stripe magic will go here */}
                                <form onSubmit={handleSubmit}>
                                    <CardElement onChange={handleChange}/>
                                    <div className="payment__priceContainer">
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <h3>Order Total: {value}</h3>
                                            )}
                                            decimalScale={2}
                                            value={getBasketTotal(basket)}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />
                                        <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                  {/* Errors */}
                                {error && <div>{error}</div>}
                                </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Payment
