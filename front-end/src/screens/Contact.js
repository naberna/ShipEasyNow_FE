import { Link } from "react-router-dom";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import JumbotronBasic from "../components/JumbotronBasic";
// import GoogleMapReact from 'google-map-react';

function Contact() {
  return (
    <>
    <JumbotronBasic/>
    <section className="section contact">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h1 className="section-main-title">
              Speak to an agent 'Instantaneously'
            </h1>
          </Col>
          <Col xs={12} md={3} className="contact-box">
            <div className="box">
            <AiOutlinePhone />
                <div>
                  <div className="title"><mark>Phone</mark></div>
                  <Link to="/" className="text">(000) 000-0000</Link>
                </div>
            </div>
          </Col>
          <Col xs={12} md={3} className="contact-box">
            <div className="box">
            <AiOutlineMail />
                <div>
                  <div className="title"><mark>Email</mark></div>
                  <Link to="/" className="text">example@shipeasynow.com</Link>
                </div>
            </div>
          </Col>
          <Col xs={12} md={3} className="contact-box">
            <div className="box">
                <IoChatboxEllipsesOutline />
                <div>
                  <div className="title"><mark>Chat</mark></div>
                  <Link to="/" className="text">Chat with the Agent</Link>
                </div>
            </div>
          </Col>
          <Col xs={12} md={3} className="contact-box">
            <div className="box">
              <div>
                <div className="title">Working Hours</div>
                <div className="text">
                  <div>Monday: 9:00 AM - 5:00 PM</div>
                  <div>Tuesday: 9:00 AM - 5:00 PM</div>
                  <div>Wednesday: 9:00 AM - 5:00 PM</div>
                  <div>Thursday: 9:00 AM - 5:00 PM</div>
                  <div>Friday: 9:00 AM - 5:00 PM</div>
                  <div>Saturday: 9:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="contactUs">
          <Col xs={12} md={8}>
            <h1 className="section-main-title">Contact Us</h1>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Control type="text" placeholder="Surname" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Control type="text" placeholder="Phone" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridSubject">
                <Form.Control placeholder="Subject" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea">
                <Form.Control
                  as="textarea"
                  placeholder="Your Message"
                  rows={3}
                />
              </Form.Group>

              <button className="btn button" type="submit">
                Send
              </button>
            </Form>
          </Col>
          <Col xs={12} md={4}>
            <h1 className="section-main-title">Address</h1>
            
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Contact;
