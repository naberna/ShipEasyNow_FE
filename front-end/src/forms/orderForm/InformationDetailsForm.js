import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { informationDetailsValidation } from "../validations/formValidations";
import { Col, Form, Row } from "react-bootstrap";

const InformationDetailsForm = (props) => {
  // const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    transportEmail: "",
    transportPhone: "",
  });

  const handleChange = (inputName) => (e) => {
    e.preventDefault();

    setInputs({
      ...inputs,
      [inputName]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      transportEmail: inputs.transportEmail,
      transportPhone: inputs.transportPhone,
    };

    
    props.handleNext();
  };
  return (
    <div>
      <Form className="vehicle" onSubmit={handleFormSubmit} id="form-step1">
        <Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label className="form-subtitle">Your First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg John"
                onChange={handleChange("firstName")}
                defaultValue={inputs.firstName}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label className="form-subtitle">Your Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg Wayne"
                onChange={handleChange("lastName")}
                defaultValue={inputs.lastName}
              />
            </Form.Group>
            <Form.Group controlId="fullEmail">
              <Form.Label className="form-subtitle">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                onChange={handleChange("transportEmail")}
                defaultValue={inputs.transportEmail}
              />
            </Form.Group>
            <Form.Group controlId="fullPhoneNumber">
              <Form.Label className="form-subtitle">Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="0-000-0000"
                onChange={handleChange("transportPhone")}
                defaultValue={inputs.transportPhone}
              />
            </Form.Group>
          </Col>

          <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
          <Col>
            <div className="details-table">
              <div className="main-title">Details</div>
              <div className="table">
                <div className="table-col">
                  <div className="title">Distance</div>
                  <div className="expl">2mi</div>
                </div>
                <div className="table-col">
                  <div className="title">First available date</div>
                  <div className="expl">05/03/2021</div>
                </div>
                <div className="table-col">
                  <div className="title">Vehicle</div>
                  <div className="expl">
                    2019 Alfa Romeo Giulia Quadrifoglio
                  </div>
                </div>
                <div className="table-col">
                  <div className="title">Vehicle Condition</div>
                  <div className="expl">2mi</div>
                </div>
                <div className="table-col">
                  <div className="title">Transport Type</div>
                  <div className="expl">2mi</div>
                </div>
                <div className="table-col">
                  <div className="title">Transit time</div>
                  <div className="expl">1-2 days</div>
                </div>
                <div className="table-col">
                  <div className="title">Due Now</div>
                  <div className="expl">
                    <div className="total-price">$0</div>
                    <div className="total-price-info">
                      Don’t worry - you won’t pay until your pickup is
                      scheduled.
                    </div>
                  </div>
                </div>
                <div className="table-col">
                  <div className="title">Price Option</div>
                  <div className="expl">$269 Discounted cash price</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default InformationDetailsForm;
