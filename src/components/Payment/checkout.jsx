import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import Payment from "./Payment";
const stripePromise = loadStripe("pk_test_51JO1iSSDo0gJpYTejY7QVhbtnhnTGzRQaCZSA5Pzxj9RaV6FsYEu67H0E71cuBCw2R6TIEWLknAHyUH6QiuJqyrH00TlxEIUXM");

function Checkout() {
    const { state } = useLocation();
    return (
        <>
            <Elements stripe={stripePromise}>
                <Payment />
            </Elements>
            {/* state.amount */}
        </>
    );
}
export default Checkout;
