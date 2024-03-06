import React, { useEffect, useState } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BASE_PATH, PATH_PAYMENT } from "../../routes";
import axios from "axios";
import { getBaseURL } from "../../api/config";
import { ToastContainer, toast } from "react-toastify";

const SubscriptionPlans = () => {
  const [subscriptioncurrent, setSubscriptioncurrent] = useState({});
  const [subscription, setSubscription] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const [details, setDetails] = useState({
    username: "",
    email: "",
  });
  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response, "test");
        setDetails({
          ...details,
          username: response.data.name,
          email: response.data.email,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const cancel_subscription = () => {
    axios
      .get(`${getBaseURL()}/auth/cancel-subscription`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Successful Membership Cancel!", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };

        fetch(`${getBaseURL()}/auth/next-subscription-billing`, requestOptions)
          .then((response) => response.json())
          .then((result) => setSubscriptioncurrent(result.data))
          .catch((error) => console.error(error));
      })
      .catch((err) => console.log(err, "error"));



  };

  const getsubscription = () => {
    axios
      .get(`${getBaseURL()}/get-subscription-plans`)
      .then((res) => {
        setSubscription(res?.data?.data);
        console.log(res?.data?.data, "dertyuj");
      })
      .catch((err) => console.log(err, "error"));
  };




  useEffect(() => {
    getsubscription();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${getBaseURL()}/auth/next-subscription-billing`, requestOptions)
      .then((response) => response.json())
      .then((result) => setSubscriptioncurrent(result.data))
      .catch((error) => console.error(error));
  }, []);
  console.log(subscriptioncurrent);
  return (
    <div>
      <ToastContainer autoClose={1000} />
      <MobileHeader />
      {/* <!-- main section start here --> */}
      <section class="mainWrapper flex hideMob">
        <Sidebar />
        <div className="rightSection">
          {" "}
          <div class=" full-width">
            <div class="subscriptionPlan">
              {/* <!-- subscription plans start here --> */}
              <h1>Subscription Plans</h1>

              <div class="current-plan">
                <p>My current plan</p>
                <div class="current-plan-container">
                  <div class="current-plan-inner">
                    {subscriptioncurrent?.subscription_type ?
                      <>
                        <p>plan Details</p>
                        <h3 style={{ textTransform: "capitalize" }}>{subscriptioncurrent?.subscription_type}</h3>
                        {subscriptioncurrent?.next_subscription == "active" ?
                          <span>*Your next billing date is {subscriptioncurrent?.next_billing}</span> : <span>Your Current Membership Canceled</span>}
                        <div class="cancel-membership">
                          {subscriptioncurrent?.next_subscription == "active" ?
                            <button type="submit" onClick={cancel_subscription}>Cancel membership</button> :
                            <button type="submit" disabled>Already Canceled</button>}
                        </div>
                      </> : <p>You Have No Active Membership </p>}
                  </div>
                </div>
              </div>
              {/* <!-- subscription plans end here -->
         <!-- change plans start --> */}
              <div class="change-plan">
                <h6>CHANGE YOUR PLAN</h6>
                <div class="plans-wrapper  flex">
                  {subscription &&
                    subscription
                      ?.sort((a, b) => b.id - a.id)
                      .map((sub) => {
                        return (
                          <div class="monthly-plans">
                            <div class="sceam">
                              <h6>{sub?.name}</h6>
                              <p>
                                {sub.price > 0 &&
                                  "$" + (sub.price / 100) + " " + "USD/month"}
                              </p>
                            </div>

                            <div
                              dangerouslySetInnerHTML={{
                                __html: sub?.description,
                              }}
                            />

                            <button
                              type="submit"
                              class="planSelectBtn"
                              onClick={() => {
                                Navigate(PATH_PAYMENT, {
                                  state: {
                                    name: details.username,
                                    email: details.email,
                                    price: sub.price,
                                    id: sub.id,
                                  },
                                });
                              }}
                              style={
                                sub?.price == 0
                                  ? { display: "none" }
                                  : { display: "block" }
                              }
                            >
                              Select
                            </button>

                            <div
                              style={
                                sub?.price == 0
                                  ? { display: "none" }
                                  : { display: "block" }
                              }
                              class="payment-mode"
                            >
                              <p>Available payment method</p>
                              <ul class="flex space-center payemtList">
                                <li>
                                  <a href="">
                                    <figure>
                                      <img
                                        src="./app/images/payment-card-1.svg"
                                        alt="Genaiguru payment"
                                      />
                                    </figure>
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <figure>
                                      <img
                                        src="./app/images/payment-card-2.svg"
                                        alt="Genaiguru payment"
                                      />
                                    </figure>
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <figure>
                                      <img
                                        src="./app/images/payment-card-3.svg"
                                        alt="Genaiguru payment"
                                      />
                                    </figure>
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <figure>
                                      <img
                                        src="./app/images/paymennt-card-4.svg"
                                        alt="Genaiguru payment"
                                      />
                                    </figure>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>

              {/* <!-- change plans start --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- main section end here --> */}
      {/* <!-- mobile section start here --> */}
      <div class="mob_profile commanMobHead hideDes">
        <div class="mobileHead flex">
          <div class="hamburger">
            <Link to={BASE_PATH}>
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
          </div>
          <h2>Subscription Plans</h2>
        </div>
        <div class="innerCommanContent contactFaq">
          <div class="rightSection">
            <div class="subscriptionPlan">
              {/* <!-- subscription plans start here --> */}
              <div class="current-plan">
                <p>My current plan</p>
                <div class="current-plan-container">
                  <div class="current-plan-inner">
                    <p>plan Details</p>
                    <h3>Monthly plan</h3>
                    <span>*Your next billing date is 16 April, 2023</span>
                    <div class="cancel-membership">
                      <button onClick={cancel_subscription}>Cancel membership</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- subscription plans end here -->
           <!-- change plans start --> */}
              <div class="change-plan">
                <h6>CHANGE YOUR PLAN</h6>
                <div class="plans-wrapper  flex">
                  {subscription &&
                    subscription?.map((sub) => {
                      return (
                        <div class="monthly-plans">
                          <div class="sceam">
                            <h6>{sub?.name}</h6>
                            <p>
                              {sub.price > 0 &&
                                "$" + (sub.price / 100) + " " + "USD/month"}
                            </p>
                          </div>

                          <div
                            dangerouslySetInnerHTML={{
                              __html: sub?.description,
                            }}
                          />

                          <button
                            type="submit"
                            class="planSelectBtn"
                            onClick={() => {
                              Navigate(PATH_PAYMENT, {
                                state: {
                                  name: details.username,
                                  email: details.email,
                                  price: sub.price,
                                  id: sub.id,
                                },
                              });
                            }}
                          >
                            Select
                          </button>

                          <div class="payment-mode">
                            <p>Available payment method</p>
                            <ul class="flex space-center payemtList">
                              <li>
                                <a href="">
                                  <figure>
                                    <img
                                      src="./app/images/payment-card-1.svg"
                                      alt="Genaiguru payment"
                                    />
                                  </figure>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <figure>
                                    <img
                                      src="./app/images/payment-card-2.svg"
                                      alt="Genaiguru payment"
                                    />
                                  </figure>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <figure>
                                    <img
                                      src="./app/images/payment-card-3.svg"
                                      alt="Genaiguru payment"
                                    />
                                  </figure>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <figure>
                                    <img
                                      src="./app/images/paymennt-card-4.svg"
                                      alt="Genaiguru payment"
                                    />
                                  </figure>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* <!-- change plans start --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- mobile section end here --> */}
    </div>
  );
};

export default SubscriptionPlans;
