import React from "react";
import car from "../assets/car.png";
import pointer from "../assets/pointer.png";
import carfront from "../assets/car-front.png";
import smartphone from "../assets/smartphone.png";

export default function HowToSteps() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="main-steps">
            <div className="steps">
              <div className="icons">
                <img src={smartphone} alt="Smart Phone" />
              </div>
              <div className="text"><span>STEP 1. </span>Quote and book your order</div>
            </div>
            <div className="steps">
              <div className="text"><span>STEP 2. </span>We pick up your vehicle</div>
              <div className="icons">
                <img src={car} alt="Car" />
              </div>
            </div>
            <div className="steps">
              <div className="icons">
                <img src={pointer} alt="Pointer" />
              </div>
              <div className="text"><span>STEP 3. </span>Track Your Vehicle</div>
            </div>
            <div className="steps">
              <div className="text"><span>STEP 4. </span>Receive your vehicle</div>
              <div className="icons">
                <img src={carfront} alt="Car" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
