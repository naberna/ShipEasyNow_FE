import React from "react";
import { Container } from "react-bootstrap";
import data from "../data";
import { Link } from "react-router-dom";

export default function Stories() {
  return (
    <section className="section">
      <Container>
      <div className="section-main-title">Latest stories for you</div>
        <div className="row">
            {data.stories.map((story) => (
            <div key={story._id} className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="story-cart">
                <div className="row">
                  <div className="col-12 image">
                    <Link to={`/story/${story._id}`}>
                      <img src={story.image} alt={story.title} />
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
            <div className="story-button">
              <Link to="/blog" className="btn button load">Load More</Link>
            </div>
        </div>
      </Container>
    </section>
  );
}
