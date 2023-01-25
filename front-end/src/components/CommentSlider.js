import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import CommentCart from "./CommentCart";
import Brands from './Brands';


export default class CommentSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1
          },
        },
      ],
    };
    return (
        <section className="section comments">
          <Container fluid="xl">
          <h2 className="section-main-title">Client's Reviews</h2>
          <div className="carousel">
            <Slider  {...settings}>
              <CommentCart />
              <CommentCart />
              <CommentCart />
              <CommentCart />
              <CommentCart />
              <CommentCart />
              <CommentCart />
              <CommentCart />
              <CommentCart />
              <CommentCart />
              <CommentCart />
            </Slider >
          </div>
          <div className="comment-button">
          <button className="btn button button-third">Read More</button>
          </div>
          <Brands/>
        </Container>
        </section>
    );
  }
}
