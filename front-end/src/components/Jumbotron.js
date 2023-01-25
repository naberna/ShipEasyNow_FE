import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { Col, Jumbotron as Jumbo, Row } from "react-bootstrap";
import { Link } from "@material-ui/core";

const items = [
  {
    src: "../assets/family-car.png",
    altText: "For Individuals",
    caption: "For Individuals",
    captionexp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/individual"
    },
  {
    src: "../assets/carbusiness.png",
    altText: "For Businesses",
    caption: "For Businesses",
    captionexp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/business"
    },
  {
    src: "../assets/trailer.png",
    altText: "For Carriers",
    caption: "For Carriers",
    captionexp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/carrier"
    },
  {
    src: "../assets/authorized-dealer.png",
    altText: "For Dealers",
    caption: "For Dealers",
    captionexp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/dealer"
    },
];

const Jumbotron = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Row>
          <Col className="left">
            <img src={item.src} alt={item.altText} />
          </Col>
          <Col className="right">
            <div>
              <h1 className="main-title focus-in-contract">Ship Easy Now</h1>
              <div className="sub-title focus-in-contract">{item.caption}</div>
              <div className="explanation focus-in-contract">
                {item.captionexp}
              </div>
              <Link className="btn button scale-in-center jumbo-button" to={item.link}>Learn More</Link>
            </div>
          </Col>
        </Row>
        {/*  */}
      </CarouselItem>
    );
  });

  return (
    <Jumbo className="jumbo">
      {/* <div className="overlay"></div> */}
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="hero"
        fade
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </Jumbo>
  );
};

export default Jumbotron;
