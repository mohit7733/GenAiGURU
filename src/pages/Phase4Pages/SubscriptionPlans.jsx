import React, { useEffect, useState } from "react";
import MobileHeader from "../../components/Layout/MobileHeader";
import Sidebar from "../../components/Layout/Sidebar";
import { Link } from "react-router-dom";
import { BASE_PATH } from "../../routes";
import axios from "axios";
import { getBaseURL } from "../../api/config";

const SubscriptionPlans = () => {
  const [subscription, setSubscription] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));

  const getsubscription = () => {
    axios
      .get(`${getBaseURL()}/get-subscription-plans`)
      .then((res) => {
        console.log(res?.data?.data, "sub");
        setSubscription(res?.data?.data);
      })
      .catch((err) => console.log(err, "error"));
  };
  useEffect(() => {
    getsubscription();
  }, []);

  return (
    <div>
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
                    <p>plan Details</p>
                    <h3>Monthly plan</h3>
                    <span>*Your next billing date is 16 April, 2023</span>
                    <div class="cancel-membership">
                      <button type="submit">Cancel membership</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- subscription plans end here -->
         <!-- change plans start --> */}
              <div class="change-plan">
                <h6>CHANGE YOUR PLAN</h6>
                <div class="plans-wrapper  flex">
                  <div class="monthly-plans">
                    <div class="sceam">
                      <h6>{subscription[0]?.name}</h6>
                      <p>
                        {"$" +
                          subscription[0]?.price.slice(
                            0,
                            subscription[0].price.length - 3
                          ) +
                          " " +
                          "USD/year"}
                      </p>
                    </div>
                    <ul>
                      <li
                        dangerouslySetInnerHTML={{
                          __html: subscription[0]?.description,
                        }}
                      />

                      <li>No ads</li>
                      <li>Listen to any story</li>
                      <li>Support quality writing</li>
                      <li>Access on any device</li>
                      <li>Create your own publications</li>
                    </ul>
                    <button type="submit" class="planSelectBtn">
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
                  <div class="monthly-plans">
                    <div class="sceam">
                      <h6>{subscription[1]?.name}</h6>
                      <p>
                        {"$" +
                          subscription[1]?.price.slice(
                            0,
                            subscription[1].price.length - 3
                          ) +
                          " " +
                          "USD/year"}{" "}
                      </p>
                    </div>
                    <ul>
                      <li
                        dangerouslySetInnerHTML={{
                          __html: subscription[1]?.description,
                        }}
                      />
                      <li>No ads</li>
                      <li>Listen to any story</li>
                      <li>Support quality writing</li>
                      <li>Access on any device</li>
                      <li>Create your own publications</li>
                    </ul>
                    <button type="submit" class="planSelectBtn">
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
                      <button type="submit">Cancel membership</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- subscription plans end here -->
           <!-- change plans start --> */}
              <div class="change-plan">
                <h6>CHANGE YOUR PLAN</h6>
                <div class="plans-wrapper  flex">
                  <div class="monthly-plans">
                    <div class="sceam">
                      <h6>Monthly</h6>
                      <p>$50 $40 USD/year</p>
                    </div>
                    <ul>
                      <li>No ads</li>
                      <li>Listen to any story</li>
                      <li>Support quality writing</li>
                      <li>Access on any device</li>
                      <li>Create your own publications</li>
                    </ul>
                    <button type="submit" class="planSelectBtn">
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
                  <div class="monthly-plans">
                    <div class="sceam">
                      <h6>Annual</h6>
                      <p>$50 $40 USD/year</p>
                    </div>
                    <ul>
                      <li>No ads</li>
                      <li>Listen to any story</li>
                      <li>Support quality writing</li>
                      <li>Access on any device</li>
                      <li>Create your own publications</li>
                    </ul>
                    <button type="submit" class="planSelectBtn">
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
