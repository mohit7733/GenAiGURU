import { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { PATH_FEATURED_CONTENT } from "../../routes";

const FeaturedContentPopup = (props) => {
  const [popularity, setPopularity] = useState("");
  const [sortby, setSortby] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [yesterdayDate, setYesterdayDate] = useState("");
  const navigate = useNavigate();
  const Sortby1 = [
    {
      id: 1,
      type: "Today",
    },
    {
      id: 2,
      type: "Yesterday",
    },
    {
      id: 3,
      type: "Last week",
    },
  ];
  const sortType = [
    {
      id: 1,
      type: "Popular",
    },
    {
      id: 2,
      type: "Feature",
    },
    {
      id: 3,
      type: "Most Read",
    },
  ];
  // const selectSortType = (item) => {
  //   const { type } = item;
  //   // console.log( "selectSortType", type);
  //   setPopularity(type);
  // };
  const Sortby = (item) => {
    const { type } = item;
    // console.log("Sortby ", type);
    setSortby(type);

    if (type === "Today") {
      const currentDateUTC = new Date();
      const data = currentDateUTC.setDate(currentDateUTC.getDate());
      const dateObject = new Date(data);
      const today = dateObject.toISOString().split("T")[0];
      setCurrentDate(today);
    } else if (type === "Yesterday") {
      const currentDateUTC = new Date();
      const data = currentDateUTC.setDate(currentDateUTC.getDate() - 1);
      const dateObject = new Date(data);
      const yesterday = dateObject.toISOString().split("T")[0];
      setCurrentDate(yesterday);
    } else {
      const currentDateUTC = new Date();
      const data = currentDateUTC.setDate(currentDateUTC.getDate() - 7);
      const dateObject = new Date(data);
      const lastWeek = dateObject.toISOString().split("T")[0];
      setCurrentDate(lastWeek);
    }
  };
  console.log(currentDate, sortby, "gghgt");
  const clearInputs = (e) => {
    e.preventDefault();
    setPopularity("");
    setSortby("");
    setCurrentDate("");
    setYesterdayDate("");
  };
  const doneButton = () => {
    props.Featuredpopup(popularity, sortby, currentDate);
  };
  return (
    <div>
      <section class="loginPopup filterPopup">
        <div class="wrapper">
          <div class="textRight">
            <a href="" class="resetBtn" onClick={clearInputs}>
              Reset
            </a>
          </div>
          <div class="headingContent">
            <h5>Popularity</h5>
            {sortType.map((item, index) => {
              return (
                <div className="sortType">
                  <button  className={popularity==item.type?"activebtn":""} onClick={() =>setPopularity(item.type)}>
                    {item.type}
                  </button>
                </div>
              );
            })}
            {/* <ul>
              <li>Popular</li>
              <li>Featured</li>
              <li>Most read</li>
            </ul> */}
          </div>
          <div class="headingContent">
            <h5>Sort by date</h5>
            {/* <ul>
              <li>
                Today <span>Aug19</span>
              </li>
              <li>
                Yesterday <span>Aug19</span>
              </li>
              <li>
                Last week <span>Aug19</span>
              </li>
            </ul> */}
            {Sortby1.map((item, index) => {
              return (
                <div className="sortType">
                  <button className={sortby==item.type?"activebtn":""} onClick={() => Sortby(item)}>{item.type}</button>
                </div>
              );
            })}
          </div>
          <button onClick={() => doneButton()} class="loginBtn">
            Done
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturedContentPopup;
