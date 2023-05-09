import React from "react";
import "./listing.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import img from "../../../Assets/image3.png";
import img2 from "../../../Assets/image2.png";
import img3 from "../../../Assets/image4.png";
import img4 from "../../../Assets/image5.png";
import img5 from "../../../Assets/image6.png";

/*import users image jpg */
import user1 from "../../../Assets/user1.jpg";
import user2 from "../../../Assets/user2.jpg";
import user3 from "../../../Assets/user3.jpg";
import user4 from "../../../Assets/user4.jpg";
import user5 from "../../../Assets/user5.jpg";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="img Name" />
          <h3>plants 1</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="img Name" />
          <h3>plants 2</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img3} alt="img Name" />
          <h3>plants 3</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img4} alt="img Name" />
          <h3>plants 4</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img5} alt="img Name" />
          <h3>plants 5</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="img Name" />
          <h3>plants 6</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellerts</h3>
            <button className="btn flex">
              See All
              <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user4} alt="Users img" />
              <img src={user3} alt="Users img" />
              <img src={user2} alt="Users img" />
              <img src={user5} alt="Users img" />
            </div>
            <div className="cardText">
              <span>
                23.451 Plant sold <br />
                <small>
                  25 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellerts</h3>
            <button className="btn flex">
              See All
              <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user1} alt="Users img" />
              <img src={user2} alt="Users img" />
              <img src={user3} alt="Users img" />
              <img src={user4} alt="Users img" />
              <img src={user5} alt="Users img" />
            </div>
            <div className="cardText">
              <span>
                10.451 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
