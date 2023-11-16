import React from "react";

const SubscriptionPlans = () => {
  return (
    <div>
      {/* <!-- main section start here --> */}
      <section class="mainWrapper flex">
        <div class="rightSection">
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
                              title="Genaiguru payment"
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
                              title="Genaiguru payment"
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
                              title="Genaiguru payment"
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
                              title="Genaiguru payment"
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
                              title="Genaiguru payment"
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
                              title="Genaiguru payment"
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
                              title="Genaiguru payment"
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
                              title="Genaiguru payment"
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
      </section>
      {/* <!-- main section end here --> */}
    </div>
  );
};

export default SubscriptionPlans;
