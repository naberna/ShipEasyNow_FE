import React from "react";
import { Container } from "react-bootstrap";
import laptop from "../assets/laptop.png";
import car from "../assets/sports-car.png";

export default function DoubleCart() {
  return (
    <section>
      <Container>
        <div className="section-main-title">
          How do I book with an auto transport company?
        </div>
        <div className="section-title">
          Montway Auto Transport’s company guide to quick, easy and safe auto
          shipping
        </div>
        <div class="double-cart container">
          <div class="row">
            <div class="col-lg-5 col-md-12 col-sm-12 description">
              <h3>Our auto transporter steps:</h3>
              <div className="steps">
                <div className="icon">
                  <img src={laptop} alt="Logo" />
                </div>
                <div className="step">
                  <h4 className="step-number">Step 1</h4>
                  <div className="text">Quote and book your order</div>
                </div>
              </div>
              <div className="steps">
                <div className="icon">
                  <img src={car} alt="Logo" />
                </div>
                <div className="step">
                <h4 className="step-number">Step 2</h4>
                  <div className="text">We pick up your vehicle</div>
                </div>
              </div>
              <div className="steps">
                <div className="icon">
                  <img src={car} alt="Logo" />
                </div>
                <div className="step">
                <h4 className="step-number">Step 3</h4>
                  <div className="text">Receive your vehicle</div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12 video">
                <iframe src="https://www.youtube.com/embed/xcJtL7QggTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
