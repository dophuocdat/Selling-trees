import React from "react";
import "./activity.css";
import { BsArrowRightShort } from "react-icons/bs";
/*import customer img jpg*/
import user1 from "../../../Assets/user1.jpg";
import user2 from "../../../Assets/user2.jpg";
import user3 from "../../../Assets/user3.jpg";
import user4 from "../../../Assets/user4.jpg";
import user5 from "../../../Assets/user5.jpg";
const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer img" />
          <div className="CustomerDetails">
            <span className="name">My Ly</span>
            <small> Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user3} alt="Customer img" />
          <div className="CustomerDetails">
            <span className="name">Quoc Trung</span>
            <small> Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user4} alt="Customer img" />
          <div className="CustomerDetails">
            <span className="name">Hong Hanh</span>
            <small> Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user2} alt="Customer img" />
          <div className="CustomerDetails">
            <span className="name">Truc Phuong</span>
            <small> Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user5} alt="Customer img" />
          <div className="CustomerDetails">
            <span className="name">My Le</span>
            <small> Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer img" />
          <div className="CustomerDetails">
            <span className="name">Bao Le</span>
            <small> Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
