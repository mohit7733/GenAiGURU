import React from "react";

const Rewards = () => {
  return (
    <div>
      {/* <!-- main section start here --> */}
      <section class="mainWrapper flex">
       
        <div class="rightSection">
          <div class="guru-gold-silver">
            <div class="innerBreadcrumb">
              <p>
                <a href="#">Gurugold</a>{" "}
                <i class="fa fa-angle-right" aria-hidden="true"></i> Rewards
              </p>
            </div>
            <h1>Rewards</h1>
            <div class="access-rewards">
              <div class="content-box">
                <h5>Access rewards </h5>
                <p>5000/20,000 coins</p>
              </div>
              <div class="reward-container flex space-between">
                <h6>First sign-up</h6>
                <span>
                  <figure>
                    <img
                      src="./app/images/coins.png"
                      alt="Genaiguru Coins"
                      title="Genaiguru Coins"
                    />
                  </figure>
                  2050 Coins
                </span>
              </div>
              <div class="reward-container flex space-between">
                <h6>Joining news-later</h6>
                <span>
                  <figure>
                    <img
                      src="./app/images/coins.png"
                      alt="Genaiguru Coins"
                      title="Genaiguru Coins"
                    />
                  </figure>
                  2050 Coins
                </span>
              </div>
            </div>
            {/* <!-- reach 120 minuts in 10days --> */}
            <div class="reach-days">
              <div class="access-rewards">
                <div class="content-box">
                  <h5>Rewards </h5>
                  <p>Reach 120 min in 10 Days</p>
                </div>
                <div class="reward-container flex space-between">
                  <h6>After complete an article</h6>
                  <span>
                    <figure>
                      <img
                        src="./app/images/coins.png"
                        alt="Genaiguru Coins"
                        title="Genaiguru Coins"
                      />
                    </figure>
                    2050 Coins
                  </span>
                </div>
                <div class="reward-container flex space-between">
                  <h6>Leaving comments</h6>
                  <span>
                    <figure>
                      <img
                        src="./app/images/coins.png"
                        alt="Genaiguru Coins"
                        title="Genaiguru Coins"
                      />
                    </figure>
                    2050 Coins
                  </span>
                </div>
                <div class="reward-container flex space-between">
                  <h6>Sharing content</h6>
                  <span>
                    <figure>
                      <img
                        src="./app/images/coins.png"
                        alt="Genaiguru Coins"
                        title="Genaiguru Coins"
                      />
                    </figure>
                    2050 Coins
                  </span>
                </div>
                <div class="reward-container flex space-between">
                  <h6>Watching youtube videos</h6>
                  <span>
                    <figure>
                      <img
                        src="./app/images/coins.png"
                        alt="Genaiguru Coins"
                        title="Genaiguru Coins"
                      />
                    </figure>
                    2050 Coins
                  </span>
                </div>
                <div class="reward-container flex space-between">
                  <h6>Interacting with chatbot</h6>
                  <span>
                    <figure>
                      <img
                        src="./app/images/coins.png"
                        alt="Genaiguru Coins"
                        title="Genaiguru Coins"
                      />
                    </figure>
                    2050 Coins
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rewards;
