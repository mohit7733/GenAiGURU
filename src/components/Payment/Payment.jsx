import React, { useState } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Link, Location, useLocation } from "react-router-dom";
import { BASE_PATH } from "../../routes";
const Payment = () => {
  const Location = useLocation();
  console.log(Location, "test2");

  const [formData, setFormData] = useState({
    name: Location.state.name,
    email: Location.state.email,
    finalAmount: Location.state.price,
    countryCode: "",
    city: "",
    postalCode: "",
    phone_number: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // const handleInputChange = (e) => {

  //   setFormData("")

  // };
  // console.log(setFormData,"test")

  return (
    <>
      <Header />
      <section className="mainWrapper flex">
        <Sidebar />
        <div className="rightSection PostWrapper">
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
              <form className="help-section payment-wrapper">
                <h2 style={{ marginBottom: "20px" }}>Payment Form</h2>
                <div className="profile-edit">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="name"
                    value={formData.name}
                    // onChange={handleInputChange}
                  />
                </div>
                <div className="profile-edit">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    placeholder="Type here"
                    name="email"
                    value={formData.email}
                    // onChange={handleInputChange}
                  />
                </div>
                <div className="profile-edit flex space-between">
                  <div className="profile-edit">
                    <label htmlFor="countryCode">Country</label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      // onChange={handleInputChange}
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada (+1)</option>
                      <option value="GB">United Kingdom (+44)</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="profile-edit">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      placeholder="Type here"
                      name="city"

                      // onChange={handleInputChange}
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
                      pattern="[0-9]{5}"
                      title="Five digit postal code"

                      // onChange={handleInputChange}
                    />
                  </div>
                  <div className="profile-edit">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                      type="text"
                      name="phone_number"
                      placeholder="Type here"
                      maxLength="12"

                      // onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="profile-edit">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="cardNumber"
                    value=""
                  />
                </div>
                <div className="profile-edit flex space-between">
                  <div className="profile-edit">
                    <label htmlFor="expiry">Expiry</label>
                    <input
                      type="text"
                      placeholder="Type here"
                      name="expiry"
                      value=""
                    />
                  </div>
                  <div className="profile-edit">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      placeholder="Type here"
                      name="cvv"
                      value=""
                    />
                  </div>
                </div>
                {/* Remaining input fields */}
                {/* ... */}
                <div className="profile-edit">
                  <label htmlFor="finalAmount">Final Amount</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="finalAmount"
                    value={"$" + formData.finalAmount}
                    // onChange={handleInputChange}
                  />
                </div>
                <div className="button-wrapper flex space-between">
                  <button type="button" className="loginBtnPay">
                    Pay
                  </button>
                  <button type="button" className="loginBtnCancel">
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
