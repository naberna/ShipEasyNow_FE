import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import growth from "../assets/growth1.png";
import tutorial from "../assets/tutorial.png";
import advice from "../assets/advice.png";
import award from "../assets/award.png";
import no from "../assets/no.png";
import certificate from "../assets/certificate.png";
import support from "../assets/support.png";
import stopwatch from "../assets/stopwatch.png";
import experience from "../assets/experience.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

export default class Advantages extends React.Component {
  render() {
    var settings = {
      autoPlay: true,
      showArrows: false,
      showThumbs: false,
      showStatus: false,
      infiniteLoop: true
    };
    return (
      <section className="advantages">
        <Container fluid>
          <Row>
            <Col xs={12} md={6} className="left">
              <Row>
                <Col xs={12} md={4}></Col>
                <Col xs={12} md={8} className="inner-advantage">
                  <h2 className="section-title">Our Advantages</h2>
                  <Carousel {...settings}>
                    <div>
                      <Col className="advantage">
                        <div className="image">
                          <img src={growth} alt="growth" />
                        </div>
                        <div>
                          <div className="title">Leave it to the pros</div>
                          <div className="text">We are a top-rated auto transport company.</div>
                        </div>
                      </Col>
                      <Col className="advantage">
                        <div className="image">
                          <img src={tutorial} alt="tutorial" />
                        </div>
                        <div>
                        <div className="title">Personalized approach</div>
                        <div className="text">Ship Easy Now works with you through every step of your car or truck’s move.</div>
                        </div>
                      </Col>
                      <Col className="advantage">
                        <div className="image">
                          <img src={advice} alt="advice" />
                        </div>
                        <div>
                        <div className="title">Dedicated advisors</div>
                        <div className="text">Our advisors work to ensure you are working with the best vehicle transportation company.</div>
                        </div>
                      </Col>
                    </div>
                    <div>
                      <Col className="advantage">
                        <div className="image">
                          <img src={award} alt="award" />
                        </div>
                        <div>
                          <div className="title">The best company</div>
                          <div className="text">Check out our online reviews to see why we are widely considered one of the best car moving companies.</div>
                        </div>
                      </Col>
                      <Col className="advantage">
                        <div className="image">
                          <img src={no} alt="no" />
                        </div>
                        <div>
                        <div className="title">Zero upfront payment</div>
                        <div className="text">You read that right, no upfront payment!</div>
                        </div>
                      </Col>
                      <Col className="advantage">
                        <div className="image">
                          <img src={certificate} alt="certificate" />
                        </div>
                        <div>
                        <div className="title">Insurance coverage</div>
                          <div className="text">Our auto haulers must meet insurance standards before qualifying to be part of our carrier network.</div>
                        </div>
                      </Col>
                    </div>
                    <div>
                      <Col className="advantage">
                        <div className="image">
                          <img src={support} alt="support" />
                        </div>
                        <div>
                        <div className="title">15K+ auto carriers</div>
                        <div className="text">Our auto transporter company has a huge network of haulers who are personally vetted experts.</div>
                        </div>
                      </Col>
                      <Col className="advantage">
                        <div className="image">
                          <img src={stopwatch} alt="stopwatch" />
                        </div>
                        <div>
                        <div className="title">Extended hours</div>
                        <div className="text">We are always ready to answer your vehicle transportation questions.</div>
                        </div>
                      </Col>
                      <Col className="advantage">
                        <div className="image">
                          <img src={experience} alt="experience" />
                        </div>
                        <div>
                          <div className="title">Experiences Team</div>
                          <div className="text">We are an experienced team with attention to client-focus solutions.</div>
                        </div>
                      </Col>
                    </div>
                  </Carousel>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6} className="right"></Col>
          </Row>
        </Container>
      </section>
    );
  }
}
