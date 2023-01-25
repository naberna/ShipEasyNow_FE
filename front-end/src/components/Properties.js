import React from "react";
import { Container } from "react-bootstrap";
import data from "../data";

export default function Properties() {
  return (
    <section>
      <Container>
        <div className="section-main-title">
          Why you should book with one of the best auto shipping companies:
        </div>
        <div className="row">
          {data.properties.map((property) => (
            <div key={property._id} className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div className="property">
                <div className="row">
                  <div className="content">
                    <div className="icon"><img src={property.image} alt={property.title} /></div>
                    <div className="sub-title">{property.title}</div>
                    <div className="text">{property.desciption}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
