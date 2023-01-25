import React from "react";
import { Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaVimeoV,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="dark">
      <Container>
        <div className="footer-top">
          <ul>
            <li>
              <a href="/">Ship car across country</a>
            </li>
            <li>
              <a href="/">Car shipping cost</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div className="logo">SHIP EASY NOW</div>
              <div className="social">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaVimeoV />
                <FaYoutube />
                <FaInstagram />
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ul>
                <li>
                  <a href="/">Terms & conditions</a>
                </li>
                <li>
                  <a href="/">Privacy policy</a>
                </li>
                <li>
                  <a href="/">Copyright</a>
                </li>
                <li>
                  <a href="/">Terms of use</a>
                </li>
                <li>
                  <a href="/">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div className="address">ADDRESS</div>
              <div className="phone">(000) 000-0000</div>
              <div className="copyrights">
                Copyright © 2006-2021 by Ship Easy Now
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
