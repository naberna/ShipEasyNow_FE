import React from "react";
import { Link } from "react-router-dom";
import site from "../assets/google.png";
import { BsStarFill } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";

export default function CommentCart() {
  return (
    <div className="comment-cart">
      <div className="row">
        <div className="content">
          <FaQuoteRight className="quote"/>
          <div className="col-12 name-and-rating">
            <div className="sub-title">Berna Polat</div>
            <div className="rating">5 <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>
          </div>
          <div className="col-12 text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </div>
          <div className="col-12 date-and-site">
            <div className="date">17.04.2021</div>
            <div className="site">
              <Link to="/">
                <img src={site} alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
