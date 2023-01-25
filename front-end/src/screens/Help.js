import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import creditcard from "../assets/credit-card.png";
import insurance from "../assets/life-insurance.png";
import help from "../assets/car-help.png";
import message from "../assets/message.png";
import truck from "../assets/pickup-truck.png";
import Faq from "react-faq-component";
import question from "../assets/question-mark.png";

const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };
  
  const styles = {
    bgColor: "#FFFFFF",
    titleTextColor: "#193b48",
    rowTitleColor: "#193b48",
    rowContentColor: "#393939",
    arrowColor: "#fda543",
  };
  
  const config = {
    animate: true,
    tabFocus: true,
  };
  
function Help() {

  return (
    <section className="section help">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h1 className="section-main-title">Help Center</h1>
            <h4 className="sub-title">
              Welcome to Ship Easy Now Support. We are ready to help!
            </h4>
            <Row className="wrap">
              <Col xs={12} md={9}>
                <div className="search">
                  <div className="search-input">
                    <AiOutlineSearch />
                    <input
                      type="text"
                      class="form-control searchTerm"
                      placeholder="What are you looking for?"
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="search">
                  <button className="btn button" type="submit">
                    Search
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="faq-center">
          <Faq data={data} styles={styles} config={config} />
          </Col>
          <Col xs={12} md={6} className="question-image">
            <img src={question} alt="question" />
          </Col>
        </Row>
      </Container>
      <div className="middle">
        <Row>
          <Col xs={12} md={9}>
            <h3 className="title">
              Ready to transport your car with Ship Easy Now?
            </h3>
            <h5>
              Our car shipping advisors are available by calling{" "}
              <Link to="/">(000) 000-0000</Link> to answer all your questions.
            </h5>
          </Col>
          <Col xs={12} md={3} className="right">
            <button className="btn button-third">Get an instant quote</button>
          </Col>
        </Row>
      </div>
      <Container>
        <h3 className="section-subtitle">
          Here for you, every step along the way
        </h3>
        <Row>
          <Col xs={12} md={4} className="contact-box">
            <img src={creditcard} alt="creditcard" />
            <div className="title">Cost, Payment & Cancellation Policy</div>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                How do I pay for my transport service?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                Can I pay the full transport cost with my credit card?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                How do I pay for my car transport?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                How much does it cost to ship my car?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                Do you offer a Military discount?
              </div>
            </Link>
          </Col>
          <Col xs={12} md={4} className="contact-box">
            <img src={insurance} alt="insurance" />
            <div className="title">Insurance & Personal Items</div>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                Can I ship personal items in my car?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                Is my vehicle insured during transport?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                What do I do if my car is damaged during transport?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                Are personal items in the car insured?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                What is the type of insurance my vehicle is under during
                transport?
              </div>
            </Link>
          </Col>
          <Col xs={12} md={4} className="contact-box">
            <img src={truck} alt="truck" />
            <div className="title">Pickup & Delivery</div>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                Importance of the bill of lading
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                How long does it take to ship my car?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                Can you guarantee a pick up or delivery date and time?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                How long will I be without my vehicle?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                Do I have to be at pickup or delivery?
              </div>
            </Link>
          </Col>
          <Col xs={12} md={4} className="contact-box">
            <img src={help} alt="help" />
            <div className="title">Types of Car Shipping Services</div>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                What is Door-to-Door auto transport?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                How can I track my vehicle while in transit?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">What is top load?</div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                What type of truck will transport my car?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                What is the difference between open and enclosed transport?
              </div>
            </Link>
          </Col>
          <Col xs={12} md={4} className="contact-box">
            <img src={message} alt="message" />
            <div className="title">Useful Information</div>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                What is the First Available Shipping Date?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                Is Ship Easy Now a Carrier or a Broker?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                What is the difference between a Carrier and a Broker?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                What do I do if I need to cancel my order? Do I get a refund?
              </div>
            </Link>
            <Link to="/" className="content">
              <AiOutlineRight />
              <div className="content-text">
                Will I receive a vehicle shipping contract?
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Help;
