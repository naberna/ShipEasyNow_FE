import React from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";

export default function CounterContainer() {
  return (
    <section className="counter-container">
      <Container>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="counter">
              <CountUp
                start={0}
                end={624353}
                duration={2.75}
                separator=","
                decimal=","
                prefix=""
                suffix=" +"
              ></CountUp>
            </div>
            <div className="text">Satisfied customers</div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 left">
            <div className="counter">
              <CountUp
                start={0}
                end={747924}
                duration={2.75}
                separator=","
                decimal=","
                prefix=""
                suffix=" +"
              ></CountUp>
            </div>
            <div className="text">Vehicles delivered</div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 middle">
            <div className="logo">SHIP EASY NOW</div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 right">
            <div className="counter">
              <CountUp
                start={0}
                end={14}
                duration={2.75}
                separator=","
                decimal=","
                prefix=""
                suffix=" + Years"
              ></CountUp>
            </div>
            <div className="text">Experience</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="counter">
              <CountUp
                start={0}
                end={15000}
                duration={2.75}
                separator=","
                decimal=","
                prefix=""
                suffix=" +"
              ></CountUp>
            </div>
            <div className="text">Drivers</div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
        </div>
      </Container>
    </section>
  );
}
