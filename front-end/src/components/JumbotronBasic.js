import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const JumbotronBasic = (props) => {
  return (
    <Jumbo fluid className="jumbo-basic">
      <div className="overlay"></div>
      <Container>
        <h1>Contact</h1>
        <p>We'd love to hear from you</p>

        <div className="breadcrumbs">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">Contact</Typography>
          </Breadcrumbs>
        </div>
      </Container>
    </Jumbo>
  );
};

export default JumbotronBasic;
