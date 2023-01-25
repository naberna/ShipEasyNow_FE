import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Forgetpassword = () => {
  return (
    <Container className="single-forms">
      <h3 className="title">Reset your password</h3>
      <Form className="box">
        <Form.Group controlId="signinEmail">
          <Form.Label className="form-subtitle">Enter your user account's verified email address and we will send you a password reset link.</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
          />
        </Form.Group>

        <button type="button" color="primary" className="btn button">
          Send password reset email
        </button>
        <div className="social">
          <Link to="/" className="facebook">
            <FaFacebookF />
          </Link>
          <Link to="/" className="youtube">
            <FaYoutube />
          </Link>
          <Link onTouchCancelCapture="/" className="instagram">
            <FaInstagram />
          </Link>
          <Link to="/" className="gmail">
            <SiGmail />
          </Link>
        </div>
      </Form>
      <div className="alt-box">
        <div className="links">
          Don't have an account?
          <Link to="/register" className="link-title">
            {" "}
            Register
          </Link>
        </div>
      </div>
      <div className="alt-links">
        <Link to="/">Terms</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Security</Link>
        <Link to="/">Contact</Link>
      </div>
    </Container>
  );
};

export default Forgetpassword;
