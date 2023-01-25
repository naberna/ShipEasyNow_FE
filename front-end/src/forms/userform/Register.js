import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { register } from '../../actions/userActions';
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

export default function Register (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;
  
    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert('Password and confirm password are not match');
      } else {
        dispatch(register(email, password));
      }
    };
    useEffect(() => {
      if (userInfo) {
        props.history.push(redirect);
      }
    }, [props.history, redirect, userInfo]);

  return (
    <Container className="single-forms">
      <h3 className="title">Create your account</h3>
      <Form onSubmit={submitHandler} className="box" noValidate>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <Form.Group controlId="registerEmail">
          <Form.Label className="form-subtitle">E-mail</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </Form.Group>
        <Form.Group controlId="signinPassword">
          <Form.Label className="form-subtitle">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </Form.Group>
        <Form.Group controlId="registerConfirmPassword">
          <Form.Label className="form-subtitle">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            name="confirm"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </Form.Group>

        <button type="submit" color="primary" className="btn button">
          Register
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
        Already have an account?
          <Link to="/signin" className="link-title">
            {" "}
            Sign In
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

