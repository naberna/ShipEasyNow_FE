import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { signin } from '../../actions/userActions';
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { userSigninValidation } from "../validations/userSigninValidations";

export default function Signin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    let formData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    const isValid = await userSigninValidation.isValid(formData);
    
    if(isValid) {
      dispatch(signin(email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <Container className="single-forms">
      <h3 className="title">Sign In</h3>
      <Form className="box" onSubmit={submitHandler}>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <Form.Group controlId="signinEmail" className="email">
          <Form.Label className="form-subtitle">E-mail</Form.Label>
          <Form.Control
            type="text"
            id="email"
            placeholder="Enter"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <div className="links">
          <Link to="/forgetpassword">Forget Password?</Link>
        </div>
        <Form.Group controlId="signinPassword">
          <Form.Label className="form-subtitle">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Enter"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <button type="submit" color="primary" className="btn button">
          Sign In 
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

