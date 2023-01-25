import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function HowWeWork() {
  return (
    <section className="section how-we-work">
      <Container>
      <h1 className="section-main-title">
        See how Ship Easy Now fits for you
      </h1>
        <Row>
          <Col xs={12} md={6} className="left">
            <Form>
              <Form.Group controlId="lookingFor">
                <Row>
                  <Col>
                    <Form.Label className="header">I am a/an</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control as="select" className="dropdown">
                      <option>Individual</option>
                      <option>Business</option>
                      <option>Carrier</option>
                      <option>Dealer</option>
                      <option>2017</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="sizeOfCar">
                <Row>
                  <Col>
                    <Form.Label className="header">Size of Car</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control as="select" className="dropdown">
                      <option>Small Car</option>
                      <option>Midsize Car</option>
                      <option>Large Car</option>
                      <option>Sports Car</option>
                      <option>Small SUV</option>
                      <option>Middle SUV</option>
                      <option>Large SUV</option>
                      <option>Hypercar</option>
                      <option>Mini van</option>
                      <option>Medium Pickup</option>
                      <option>Large Pickup</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="transType" className="selectDiv">
                <Row>
                  <Col>
                    <Form.Label className="header">Transport Type</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control as="select" className="dropdown">
                      <option>Door-to-door</option>
                      <option>Open</option>
                      <option>Enclosed</option>
                      <option>Expired</option>
                      <option>Hawaii</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <button className="btn button">
                  Show Me
              </button>
            </Form>
          </Col>
          <Col xs={12} md={6} className="right"></Col>
        </Row>
      </Container>
    </section>
  );
}
