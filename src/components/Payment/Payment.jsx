import React, { useState } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Link, Location, useLocation } from "react-router-dom";
import { BASE_PATH } from "../../routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { getBaseURL } from "../../api/config";
import { country } from "../Country";

const Payment = () => {
  const Location = useLocation();
  // console.log(Location, "test2");
  const Navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: Location.state.name,
    email: Location.state.email,
    finalAmount: Location.state.price,
    countryCode: "",
    city: "",
    postalCode: "",
    phone_number: "",
    address: "",
    subscription_id: Location.state.id
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value, formData);
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit2 = async (event) => {
    setLoadingStatus(true)
    event.preventDefault();
    document.querySelectorAll(".form-control.payformd").forEach(function (i) {
      if (i.classList.contains("StripeElement--empty")) {
        i.classList.add("error-active");
        console.log(i);
      }
    });

    if (formData?.finalAmount > 0) {
      const cardNumberElement = elements.getElement(CardNumberElement);
      const cardExpiryElement = elements.getElement(CardExpiryElement);
      const cardCvcElement = elements.getElement(CardCvcElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardNumberElement,
        card: cardExpiryElement,
        card: cardCvcElement,
        // card: elements.getElement(CardElement),
        billing_details: {
          address: {
            city: formData?.city,
            country: formData?.countryCode,
            line1: formData?.address,
            postal_code: formData?.postalCode,
          },
          email: formData?.email,
          name: formData?.name,
          phone: formData?.phone_number,
        },
      });
      if (!error) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + JSON.parse(localStorage.getItem("token")));

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(
            {
              "amount": JSON.stringify(formData?.finalAmount),
              "currency": "USD",
              "description": "Payment Done By " + formData?.name,
              "payment_method": paymentMethod?.id,
              "name": formData?.name,
              "line1": formData?.address,
              "line2": formData?.address,
              "city": formData?.city,
              "state": formData?.city,
              "country": formData?.countryCode,
              "postal_code": formData?.postalCode,
              "subscription_id": formData?.subscription_id
            }
          ),
          redirect: "follow"
        };

        const { client_secret } = await fetch(`${getBaseURL()}/auth/create-payment-intent`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            return result?.intent
          })

        const paymentid = await stripe.confirmCardPayment(
          client_secret, {
          payment_method: paymentMethod?.id
        })


        const requestOptions2 = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({
            "subscription_id": formData?.subscription_id,
            "amount": JSON.stringify(formData?.finalAmount / 100),
            "data": paymentid,
            "payment_intent_id": paymentid.paymentIntent.id,
          }),
          redirect: "follow"
        };


        if (!paymentid?.error) {
          const savedata = await fetch(`${getBaseURL()}/auth/payment-success`, requestOptions2)
            .then((response) => response.json())
            .then((result) => {
              return result
            })
          console.log(savedata);
          if (savedata?.success) {
            setLoadingStatus(false)
            toast.success("Payment Successful", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
            setTimeout(() => {
              Navigate("/subscriptions")
            }, 1000);
          }
        } else {
          setLoadingStatus(false)
          toast.error("Payment Failed", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        }
      }
    } else {
      toast.error("Minimum 20 Amount ", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
    }
    setLoadingStatus(false)
  }


  return (
    <>
      <ToastContainer autoClose={1000} />
      <Header />
      <section className="mainWrapper flex">
        <Sidebar />
        <div className="rightSection PostWrapper paymentform">
          <div className="full-width">
            <div className="profile-edit socialLinkEdit flex">
              <p>
                <Link to={BASE_PATH}>Home</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <Link to="/subscriptions">
                  <span>Subscription plans</span>
                </Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                Payment
              </p>
            </div>
            <div className="profile-img-box postWrapper_inner">
              <form className="help-section payment-wrapper" id="payment-form" onSubmit={handleSubmit2}>
                <h2 style={{ marginBottom: "20px" }}>Payment Form</h2>
                <div className="profile-edit">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="profile-edit">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    placeholder="Type here"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="profile-edit">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="profile-edit flex space-between">
                  <div className="profile-edit">
                    <label htmlFor="countryCode">Country</label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Country</option>
                      {
                        country?.data?.map((data, index) => <option value={data?.code}>{data?.country}</option>)
                      }
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="profile-edit">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      placeholder="Type here"
                      name="city"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="profile-edit flex space-between">
                  <div className="profile-edit">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Type here"
                      pattern="[0-9]{6}"
                      title="Five digit postal code"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="profile-edit">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                      type="text"
                      name="phone_number"
                      placeholder="Type here"
                      maxLength="12"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="profile-edit">
                  <label htmlFor="cardNumber">Card Number</label>
                  <CardNumberElement className="form-control payformd" name="cardNumber" required

                    onChange={() => {
                      setTimeout(() => {
                        document
                          .querySelectorAll(".form-control.payformd")
                          .forEach(function (i) {
                            if (
                              i.classList.contains("StripeElement--complete")
                            ) {
                              i.classList.remove("error-active");
                            }
                          });
                      }, 500);
                    }}
                  />
                </div>
                <div className="profile-edit flex space-between">
                  <div className="profile-edit">
                    <label htmlFor="expiry">Expiry</label>
                    <CardExpiryElement className="form-control payformd" required onChange={() => {
                      setTimeout(() => {
                        document
                          .querySelectorAll(".form-control.payformd")
                          .forEach(function (i) {
                            if (
                              i.classList.contains("StripeElement--complete")
                            ) {
                              i.classList.remove("error-active");
                            }
                          });
                      }, 500);
                    }} />
                  </div>
                  <div className="profile-edit">
                    <label htmlFor="cvv">CVV</label>
                    <CardCvcElement className="form-control payformd" required onChange={() => {
                      setTimeout(() => {
                        document
                          .querySelectorAll(".form-control.payformd")
                          .forEach(function (i) {
                            if (
                              i.classList.contains("StripeElement--complete")
                            ) {
                              i.classList.remove("error-active");
                            }
                          });
                      }, 500);
                    }} />
                  </div>
                </div>
                {/* Remaining input fields */}
                {/* ... */}
                <div className="profile-edit">
                  <label htmlFor="finalAmount">Final Amount</label>
                  <input
                    type="text"
                    disabled
                    placeholder="Type here"
                    name="finalAmount"
                    value={"$" + (formData.finalAmount / 100)}
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="button-wrapper flex space-between">
                  <button className="loginBtnPay" disabled={loadingStatus ? true : false}>
                    {loadingStatus ?
                      <div class="typing" style={{ width: "fit-content", margin: "0 auto" }}>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                      </div>
                      : "Pay"}

                  </button>
                  <button className="loginBtnCancel">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Payment;
