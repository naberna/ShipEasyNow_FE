import React from "react";
import { Container } from "react-bootstrap";
import SimpleCommentCart from "./SimpleCommentCard";

export default function SimpleCommentContainer() {
    return (
        <section>
          <Container>
          <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <SimpleCommentCart/>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <SimpleCommentCart/>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <SimpleCommentCart/>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <SimpleCommentCart/>
              </div>
          </div>
        </Container>
        </section>
    );
}
