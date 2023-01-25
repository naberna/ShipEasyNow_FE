import React from "react";
import { Link } from "react-router-dom";
import site from "../assets/google.png";
import { BsStarFill } from "react-icons/bs";

export default function SimpleCommentCart() {
  return (
    <div className="simple-comment-cart">
        <div className="content">
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 left">
            <div className="sub-title">My Moving Reviews</div>
            <div className="rating"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>
            <div className="number-of-reviews">(596 reviews)</div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 right">
            <div className="review">5.0</div>
            <Link to="/"><img src={site} alt="Logo" /></Link>
          </div>
        </div>
    </div>
  );
}
