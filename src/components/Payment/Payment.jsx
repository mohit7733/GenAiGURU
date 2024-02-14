import React, { useState } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Location, useLocation } from "react-router-dom";
const Payment = () => {
  const Location = useLocation();
  console.log(Location, "test2");

  const [formData, setFormData] = useState({
    name: Location.state.name,
    email: Location.state.email,
    address: "",
    country: "",
    postalCode: "",
    phoneNumber: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    price: "",
  });
  return (
    <div>
      <Header />
      <section className="mainWrapper flex">
        <Sidebar />

        <div className="rightSection1">
          <div className="main">
            <div className="active router-body">
              <div
                className="breadcrumbs aos-init aos-animate"
                data-aos="fade-down"
              >
                <ul>
                  <li>{/* <a href="/dashboard">Dashboard </a> */}</li>
                  <li>
                    <a href="#">{/* <span> Payment Form </span> */}</a>
                  </li>
                </ul>
              </div>
              <h2>Payment Form</h2>
              <form className="payment_form_wrap">
                <div className="form-group">
                  <h6>Name</h6>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name=""
                    value={formData.name}
                  />
                </div>
                <div className="form-group">
                  <h6>Email Address</h6>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={formData.email}
                  />
                </div>
                <div className="form-group">
                  <h6>Address</h6>
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    required
                  />
                </div>
                <div className="row justify-content-between">
                  <div className="column pd-b">
                    <div className="custom-select">
                      <select>
                        <option value="" disabled selected>
                          Country
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="City"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="column">
                    <div className="form-group">
                      <h6>Postal Code</h6>
                      <input
                        type="text"
                        placeholder="Postal Code"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="column">
                    <div className="form-group">
                      <h6>Phone Number</h6>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-group toggle-form-box">
                    <h6>Card Number</h6>
                    <input
                      type="text"
                      placeholder="0000-0000-0000-0000"
                      className="form-control"
                    />
                  </div>
                  <div></div>
                </div>
                <div className="row justify-content-between">
                  <div className="column">
                    <div className="form-group">
                      <div className="form-group toggle-form-box">
                        <h6>Expiry</h6>
                        <input
                          type="text"
                          placeholder="mm/yy"
                          className="form-control"
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="form-group toggle-form-box">
                  <h6>CVV</h6>
                  <input
                    type="text"
                    placeholder="CVV Number"
                    className="form-control"
                  />
                </div>
                <div className="form-group toggle-form-box">
                  <h6>Price</h6>
                  <input
                    type="text"
                    placeholder="Price"
                    className="form-control"
                  />
                </div>

                <div className="button row justify-content-center">
                  <button className="btn btn-secondary pay-butto">Pay</button>
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: "5rem" }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <div
        className="row col-sm-12 card carddetail"
        style={{ display: "none" }}
      >
        <div className="col-sm-12 ">
          <div className="col-sm-12 paddCss" style={{ padding: "6px 10px 0" }}>
            <label>
              <strong>Subscription Plan :</strong>
            </label>
          </div>
          <div className="col-sm-12 paddCss" style={{ padding: "6px 10px 0" }}>
            <label>
              <strong>Subtotal :</strong>
            </label>
          </div>
          <div
            className="col-sm-12 paddCss"
            style={{ padding: "6px 10px 0" }}
          ></div>
          <div
            className="col-sm-12 paddCss"
            style={{ padding: "6px 10px 0" }}
          ></div>
        </div>
      </div> */}
    </div>
  );
};
export default Payment;
