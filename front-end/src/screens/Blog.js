import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import data from "../data";
import truck from "../assets/truckblog.jpg";
import Pagination from "react-bootstrap/Pagination";
import { BsChevronDoubleRight } from "react-icons/bs";

function Blog() {
  return (
    <section className="section blog">
      <Container>
        <h1 className="section-main-title">Recent News</h1>
        <Row className="filter-list">
          <ul className="blog-filter">
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/">Tips-tricks</Link>
            </li>
            <li>
              <Link to="/">Moving green</Link>
            </li>
            <li>
              <Link to="/">Classic cars</Link>
            </li>
            <li>
              <Link to="/">Truckers</Link>
            </li>
            <li>
              <Link to="/">Industry News</Link>
            </li>
            <li>
              <Link to="/">Company News</Link>
            </li>
            <li>
              <Link to="/">Videos</Link>
            </li>
            <li>
              <Link to="/">Useful</Link>
            </li>
          </ul>
        </Row>

        <h3 className="section-subtitle">Recent News</h3>
        <Row>
          <div className="top-content">
            <Row>
              <Col xs={12} md={7} className="left">
                <Link to="/">
                  <img src={truck} alt="Truck" />
                  <ul className="categories-list">
                    <li>
                      <div className="app-news-tag">
                        <Link to="/" className="app-news-filter-tag">
                          Useful
                        </Link>
                      </div>
                    </li>
                  </ul>
                </Link>
              </Col>
              <Col xs={12} md={5} className="right">
                <h5 className="title">
                  <Link to="/">
                    How to Choose the Best Auto Transport Company
                  </Link>
                </h5>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <Link to="/" className="continue">Continue Reading <BsChevronDoubleRight/></Link>
                <div className="date">Posted on: 05.12.2021 </div>
              </Col>
            </Row>
          </div>
        </Row>
        <h3 className="section-subtitle">Latest stories for you</h3>
        <Row>
          {data.stories.map((story) => (
            <div
              key={story._id}
              className="col-sm-12 col-md-4 col-lg-4 col-xl-4"
            >
              <div className="story-cart">
                <div className="row">
                  <div className="col-12 image">
                    <Link to={`/story/${story._id}`}>
                      <img src={story.image} alt={story.title} />
                      <ul className="categories-list">
                        <li>
                          <div className="app-news-tag">
                            <Link to="/" className="app-news-filter-tag">
                              Useful
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </Link>
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link to={`/story/${story._id}`}>{story.title} </Link>
                    </h5>
                    <div className="date">Posted on: {story.date} </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="blog-pagination">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
