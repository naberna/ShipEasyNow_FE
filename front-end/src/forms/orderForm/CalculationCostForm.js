import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CalculationCostForm(props) {
  const { handleChange, checkoutForm } = props;
  const [clickedButtonId, setClickedButtonId] = useState("firstPrice");
  return (
    <div className="details">
      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
        <div className="left">
          <div
            onClick={() => setClickedButtonId("firstPrice")}
            className={`price shadow p-4 mb-5 ${
              clickedButtonId === "firstPrice" && "selected"
            }`}
            defaultValue="269" onChange={handleChange("mainPrice")}
          >
            <div className="title">Discounted Cash Price</div>
            <div className="set-price">$269</div>
            <div className="expl">
              Once the order is assigned to a carrier, a partial payment will be
              charged, the balance will be due in cash on delivery.
            </div>
          </div>
          <div
            onClick={() => setClickedButtonId("secondPrice")}
            className={`price shadow p-4 mb-5 ${
              clickedButtonId === "secondPrice" && "selected"
            }`}
            defaultValue="369" onChange={handleChange("mainPrice")}
          >
            <div className="title">Regular Price</div>
            <div className="set-price">$289</div>
            <div className="expl">
              Once the order is assigned to a carrier, one-time payment in full
              by using your credit card or debit card will be charged.
            </div>
          </div>
        </div>
        <div>
          <p>
            Don't know the exact day? That's ok! You can change at any time.
          </p>
          <p> You will be still able to review your order.</p>
          <p className="middle">- OR -</p>
          <p>Book with one of our friendly Customer Service Agents!</p>
          <Link to="/">(000) 000-0000</Link>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <div className="details-table">
          <div className="main-title">Details</div>
          <div className="table">
            <div className="table-col">
              <div className="title">Distance</div>
              <div className="expl">2mi</div>
            </div>
            <div className="table-col">
              <div className="title">First available date</div>
              {/* <div className="expl">{checkoutForm.availableDate}</div> */}
            </div>
            <div className="table-col">
              <div className="title">Vehicle</div>
              <div className="expl">
                {checkoutForm.vehicleMake +
                  " " +
                  checkoutForm.vehicleModel +
                  " " +
                  checkoutForm.vehicleYear}
              </div>
            </div>
            <div className="table-col">
              <div className="title">Vehicle Condition</div>
              <div className="expl">2mi</div>
            </div>
            <div className="table-col">
              <div className="title">Transport Type</div>
              <div className="expl">2mi</div>
            </div>
            <div className="table-col">
              <div className="title">Transit time</div>
              <div className="expl">1-2 days</div>
            </div>
            <div className="table-col">
              <div className="title">Due Now</div>
              <div className="expl">
                <div className="total-price">$0</div>
                <div className="total-price-info">
                  Don’t worry - you won’t pay until your pickup is scheduled.
                </div>
              </div>
            </div>
            <div className="table-col">
              <div className="title">Price Option</div>
              <div className="expl">{checkoutForm.mainPrice} Discounted cash price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
